interface IDraggable extends IMouseInteractable {
    isDrag: boolean;
    OnDragStop(event: MouseEvent);
    OnDragStart(event: MouseEvent);
    OnDragContinue(event: MouseEvent);
}