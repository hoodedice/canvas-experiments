import { ctx } from "../../../index";
import BaseNode from "./BaseNode";

export default class Box extends BaseNode implements IDrawable {

    protected w: number;
    protected h: number;

    constructor(x: number, y: number, w: number, h: number) {
        super(x, y);
        this.w = w || 10;
        this.h = h || 10;
    }

    Clear() {
        ctx.clearRect(this.x, this.y, this.w, this.h);
    }

    Draw() {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    ComputeBounds() {
        this.boundX = this.x + this.w;
        this.boundY = this.y + this.h;
    }

}