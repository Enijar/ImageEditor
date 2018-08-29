import BaseRenderer from "./BaseRenderer";

export default class GUIRenderer extends BaseRenderer {
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
    }
}
