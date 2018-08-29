import State from "../ImageEditor/State";

export default (destW, destH) => {
    let width = destW;
    let height = destH;

    if (State.image.shape === 'landscape') {
        height = destW * State.image.aspectRatio;
    } else {
        width = destH * State.image.aspectRatio;
    }

    return {width, height};
}
