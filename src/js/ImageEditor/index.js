import State from "./State";
import BackgroundRenderer from "../Renderers/BackgroundRenderer";
import ImageRenderer from "../Renderers/ImageRenderer";
import GUIRenderer from "../Renderers/GUIRenderer";
import GUIResizeRenderer from "../Renderers/GUI/GUIResizeRenderer";
import MouseEvents from "../Functions/MouseEvents";

export default class ImageEditor {
    constructor(props = {}) {
        Object.assign(State, props);

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = State.width;
        this.canvas.height = State.height;
        this.mouseEvents = MouseEvents(this.canvas);

        this.renderers = [
            new BackgroundRenderer(),
            new ImageRenderer(),
            new GUIRenderer(),
            new GUIResizeRenderer()
        ];

        this.setup();
    }

    async setup() {
        await Promise.all(this.renderers.map(renderer => renderer.setup()));
        this.render();
    }

    attach(node) {
        this.attachedNode = node;
        this.attachedNode.appendChild(this.canvas);
        this.mouseEvents.add();
    }

    destroy() {
        this.mouseEvents.remove();
        this.attachedNode && this.attachedNode.removeChild(this.canvas);
    }

    render = () => {
        requestAnimationFrame(() => setTimeout(this.render, 1000 / State.fps));

        this.ctx.clearRect(0, 0, State.width, State.height);

        this.getSortedRenderers().map(renderer => {
            renderer.update();
            renderer.render();

            this.ctx.drawImage(renderer.canvas, 0, 0, renderer.width, renderer.height);
        });
    };

    getSortedRenderers() {
        return this.renderers.sort((a, b) => {
            if (a.zIndex > b.zIndex) {
                return 1;
            }

            if (a.zIndex < b.zIndex) {
                return -1;
            }

            return 0;
        });
    }
}
