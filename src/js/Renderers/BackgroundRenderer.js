import BaseRenderer from "./BaseRenderer";

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
        this.ctx.fillStyle = '#eee';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}
