import Box from "./Models/Shapes/Primitives/Box";
import BaseNode from "./Models/Shapes/Primitives/BaseNode";

let canvas = document.getElementsByTagName('canvas')[0];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export let ctx = canvas.getContext('2d');

ctx.fillStyle = "rgba(0, 130, 125, 0.4)";
ctx.strokeStyle = "#1ce";
ctx.clearRect(0, 0, canvas.width, canvas.height);

let btn_rectangle = document.getElementsByName("btn_rectangle")[0];
let btn_move = document.getElementsByName("btn_move")[0];

let box: Box = new Box(100, 100, 20, 20);

box.Draw();

box.isDrag = true;

/* btn_move.onclick = () => {
    document.addEventListener('mousedown', );
    document.addEventListener('mousemove', );
    document.addEventListener('mouseup', );
    document.body.style.cursor = 'move';
}
*/

// btn_rectangle.onclick = drawRect;

// //document.body.style.cursor = 'move';

// while (true) {
//     ;
// }

// class Rectangle {
//     private x: number;
//     private y: number;
//     private w: number;
//     private h: number;
//     private mouseX: number;
//     private mouseY: number;
//     private draggable: boolean;

//     constructor(x, y, w, h) {
//         this.x = x;
//         this.y = y;
//         this.w = w;
//         this.h = h;
//         this.mouseX = 0;
//         this.mouseY = 0;
//         this.draggable = false;
//     }

//     draw_init(): void {
//         ctx.fillRect(this.x, this.y, this.w, this.h);
//     }

//     draw(): void {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.fillRect(this.x, this.y, this.w, this.h);
//     }

//     onMouseUp(): void {
//         this.draggable = false; 
//     }

//     onMouseDown(event: MouseEvent): void {
//         if (event.x > this.x && event.x < (this.x + this.w)
//             && event.y > this.y && event.y < (this.y + this.h)) {
//             this.mouseX = event.x - this.x;
//             this.mouseY = event.y - this.y;
//             this.draggable = true;
//         }
//     }

//     onMouseMove(event: MouseEvent): void {
//         if (this.draggable == true) {
//             this.x = event.x - this.mouseX;
//             this.y = event.y - this.mouseY;
//             this.draw();
//             this.draw();
//         }
//     }


// }

// let ar_rectangles: Array<Rectangle> = [];

// function drawRect(event: MouseEvent) {
//     let x, y, w, h;
//     canvas.addEventListener('mousedown', (event) => {
//         x = event.x;
//         y = event.y;
//         console.log("mousedown");
//     });
//     canvas.addEventListener('mousemove', (event) => {
//         w = event.x - x;
//         h = event.y - y;
//         let rec = new Rectangle(x, y, w, h);
//         rec.draw();
//         ar_rectangles.push(rec);
//         console.log(w + " " + h + " " + "mouseup");
//     });

//     console.log(x + " " + y + " " + w + " " + h);
//     let rec = new Rectangle(x, y, w, h);
//     rec.draw_init();
//     ar_rectangles.push(rec);

// }

// let rect = new Rectangle(100, 100, 50, 50);

// rect.draw_init();

// window.addEventListener('mousedown', function (event) {
//     console.log(event.target);
//     if (event.target == canvas) rect.onMouseDown(event);
// });

// window.addEventListener('mousemove', function (event) {
//     rect.onMouseMove(event);
// });

// window.addEventListener('mouseup', function () {
//     rect.onMouseUp();
// });

