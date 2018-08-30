export default (coordinates, object) => (
    coordinates.x >= object.x &&
    coordinates.y >= object.y &&
    coordinates.x <= object.x + object.width &&
    coordinates.y <= object.y + object.height
)
