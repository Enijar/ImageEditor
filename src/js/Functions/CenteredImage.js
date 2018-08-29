import State from "../ImageEditor/State";

export default (width, height) => {
    const x = (State.width / 2) - (width / 2);
    const y = (State.height / 2) - (height / 2);
    return {x, y};
}
