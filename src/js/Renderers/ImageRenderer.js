import BaseRenderer from "./BaseRenderer";
import State from "../ImageEditor/State";
import LoadImage from "../Functions/LoadImage";
import ScaledImage from "../Functions/ScaledImage";
import CenteredImage from "../Functions/CenteredImage";

export default class ImageRenderer extends BaseRenderer {
    async setup() {
        await LoadImage();

        const {width, height} = ScaledImage(State.width, State.height);
        const {x, y} = CenteredImage(width, height);
        State.image.width = width;
        State.image.height = height;
        State.image.x = x;
        State.image.y = y;
    }

    update() {
        if (State.mouse.down) {
            const MIN_X = 0;
            const MAX_X = State.width - State.image.width;
            const MIN_Y = 0;
            const MAX_Y = State.height - State.image.height;

            let x = State.mouse.x - State.image.startX;
            let y = State.mouse.y - State.image.startY;

            if (State.contain) {
                // Contain within min/max bounds
                x = x <= MIN_X ? MIN_X : x;
                y = y <= MIN_Y ? MIN_Y : y;
                x = x >= MAX_X ? MAX_X : x;
                y = y >= MAX_Y ? MAX_Y : y;
            }

            State.image.x = x;
            State.image.y = y;
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.ctx.drawImage(
            State.image.instance,
            0, 0, State.image.sourceWidth, State.image.sourceHeight,
            State.image.x, State.image.y, State.image.width, State.image.height
        );
    }
}
