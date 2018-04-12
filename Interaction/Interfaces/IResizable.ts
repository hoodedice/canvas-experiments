interface IResizable extends IMouseInteractable {
    isResize: boolean;
    OnResizeStop(event: MouseEvent);
    OnResizeStart(event: MouseEvent);
    OnResizeContinue(event: MouseEvent);
}