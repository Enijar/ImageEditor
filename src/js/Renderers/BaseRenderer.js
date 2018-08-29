import State from "../ImageEditor/State";

export default class BaseRenderer {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width = State.width;
        this.height = this.canvas.height = State.height;
        this.zIndex = 0;
    }
}
