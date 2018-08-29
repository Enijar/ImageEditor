import "babel-polyfill";
import ImageEditor from "./ImageEditor/index";

const editor = new ImageEditor({
    width: 600,
    height: 600,
    contain: true,
    src: 'img/landscape.jpg',
    // src: 'img/portrait.jpg',
    // src: 'img/square.jpg',
});

editor.attach(document.body);
