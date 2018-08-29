import BaseRenderer from "../BaseRenderer";
import State from "../../ImageEditor/State";

export default class GUIResizeRenderer extends BaseRenderer {
    constructor() {
        super();
    }

    async setup() {
        //
    }

    update() {
        //
    }

    renderBox() {
        const {lineWidth, stroke} = State.renderers.GUIResize.box;
        const x = State.image.x + (lineWidth / 2);
        const y = State.image.y + (lineWidth / 2);

        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = stroke;
        this.ctx.strokeRect(x, y, State.image.width - lineWidth, State.image.height - lineWidth);
    }

    renderCorner(corner) {
        const {lineWidth, stroke} = State.renderers.GUIResize.corners[corner];
        const {size} = State.renderers.GUIResize.corners;

        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = stroke;

        let x, y;

        switch (corner) {
            case 'nw':
                x = State.image.x + (lineWidth / 2);
                y = State.image.y + (lineWidth / 2);
                this.ctx.strokeRect(x - (size / 2), y - (size / 2), size, size);
                break;
            case 'ne':
                x = State.image.width + (State.image.x - (lineWidth / 2));
                y = State.image.y + (lineWidth / 2);
                this.ctx.strokeRect(x - (size / 2), y - (size / 2), size, size);
                break;
            case 'se':
                x = State.image.width + (State.image.x - (lineWidth / 2));
                y = State.image.height + (State.image.y - (lineWidth / 2));
                this.ctx.strokeRect(x - (size / 2), y - (size / 2), size, size);
                break;
            case 'sw':
                x = State.image.x + (lineWidth / 2);
                y = State.image.height + (State.image.y - (lineWidth / 2));
                this.ctx.strokeRect(x - (size / 2), y - (size / 2), size, size);
                break;
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.ctx.beginPath();
        this.renderBox();
        this.renderCorner('nw');
        this.renderCorner('ne');
        this.renderCorner('se');
        this.renderCorner('sw');
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
