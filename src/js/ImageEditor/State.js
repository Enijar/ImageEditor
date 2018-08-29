export default {
    width: 0,
    height: 0,
    editable: true,
    fps: 60,
    padding: 10,
    mouse: {
        down: false,
        x: 0,
        y: 0
    },
    renderers: {
        Background: {
            fill: '#333',
            border: {
                fill: '#222'
            }
        },
        GUIResize: {
            box: {
                lineWidth: 2,
                stroke: '#fff'
            },
            corners: {
                size: 11,
                nw: {
                    lineWidth: 2,
                    stroke: '#fff'
                },
                ne: {
                    lineWidth: 2,
                    stroke: '#fff'
                },
                se: {
                    lineWidth: 2,
                    stroke: '#fff'
                },
                sw: {
                    lineWidth: 2,
                    stroke: '#fff'
                }
            }
        }
    }
}
