import BaseRenderer from "./BaseRenderer";
import State from "../ImageEditor/State";

export default class BackgroundRenderer extends BaseRenderer {
    constructor() {
        super();
    }

    async setup() {
        //
    }

    update() {
        //
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = State.renderers.Background.border.fill;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = State.renderers.Background.fill;
        this.ctx.fillRect(State.padding, State.padding, this.width - (State.padding * 2), this.height - (State.padding * 2));
    }
}
