import State from "../ImageEditor/State";

const getShape = (width, height) => {
    if (width > height) {
        return 'landscape';
    }

    if (height > width) {
        return 'portrait';
    }

    return 'square';
};

const getAspectRatio = (width, height) => {
    return width > height ? height / width : width / height;
};

export default () => new Promise((resolve, reject) => {
    const instance = new Image();
    instance.src = State.src;
    instance.onerror = reject;
    instance.onload = () => {
        const width = instance.naturalWidth;
        const height = instance.naturalHeight;

        State.image = {
            instance,
            sourceWidth: width,
            sourceHeight: height,
            width,
            height,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0,
            aspectRatio: getAspectRatio(width, height),
            shape: getShape(width, height)
        };

        resolve();
    };
});
