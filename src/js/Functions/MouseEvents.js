import State from "../ImageEditor/State";
import InsideBounds from "./InsideBounds";

export default canvas => {
    const getMousePosition = event => {
        const x = event.pageX - canvas.offsetLeft;
        const y = event.pageY - canvas.offsetTop;
        return {
            y: Math.max(Math.min(State.height, y), 0),
            x: Math.max(Math.min(State.width, x), 0)
        }
    };

    const handleMouseMove = event => {
        const {x, y} = getMousePosition(event);
        State.mouse.x = x;
        State.mouse.y = y;
    };

    const handleMouseDown = event => {
        const {x, y} = getMousePosition(event);

        if (!State.mouse.down) {
            State.mouse.startX = x;
            State.mouse.startY = y;
            State.image.startX = x - State.image.x;
            State.image.startY = y - State.image.y;
        }

        State.image.movable = InsideBounds(State.mouse, State.image);
        State.mouse.down = true;
    };

    const handleMouseUp = () => {
        State.mouse.down = false;
    };

    return {
        add() {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
        },
        remove() {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }
}
