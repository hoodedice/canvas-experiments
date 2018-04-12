export default class BaseNode implements IDraggable, IResizable, IDrawable {
    
    idrg: IDraggable;
    irez: IResizable;
    idrw: IDrawable;

    //x,y coordinates of BaseNode's origin, usually top-left
    protected x: number;
    protected y: number;
    
    //position of mouse pointers
    mouseX: number;
    mouseY: number;

    //computed values of x,y coordinates that determine the 
    //bound of the BaseNode, usually bottom-right
    boundX: number;
    boundY: number;

    //margins
    marginW: number;
    marginH: number;
    
    isMouseDown: boolean;
    isDrag: boolean;
    isResize: boolean;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    Clear() {
        throw new Error("BaseNode cannot be cleared");
    }

    Draw() {
        throw new Error("BaseNode cannot be drawn");
    }

    ComputeBounds() {
        throw new Error("BaseNode does not have bounds");
    }

    OnResizeStop(event: MouseEvent) {
        //throw new Error("Method not implemented.");
        this.ComputeBounds();
    }

    OnResizeStart(event: MouseEvent) {
        throw new Error("Method not implemented.");
    }

    OnResizeContinue(event: MouseEvent) {
        throw new Error("Method not implemented.");
    }

    OnDragStop(event: MouseEvent) {
        this.isDrag = false; 
    }

    OnDragStart(event: MouseEvent) {
        if (event.x > this.x && event.x < this.boundX
            && event.y > this.y && event.y < this.boundY) {
            this.mouseX = event.x - this.x;
            this.mouseY = event.y - this.y;
            this.isDrag = true;
        }
    }

    OnDragContinue(event: MouseEvent) {
        if (this.isDrag == true) {
            this.idrw.Clear();
            this.x = event.x - this.mouseX;
            this.y = event.y - this.mouseY;
            this.idrw.Draw();
        }
    }
    
}