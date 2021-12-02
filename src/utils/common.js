const getInputValue = (value) => {
    return value > 0 ? value : ``;
};

const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export {
    getInputValue,
    isEmptyObj,
};
