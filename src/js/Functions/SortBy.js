export default (array, prop) => array.sort((a, b) => {
    if (a[prop] > b[prop]) {
        return 1;
    }

    if (a[prop] < b[prop]) {
        return -1;
    }

    return 0;
});
