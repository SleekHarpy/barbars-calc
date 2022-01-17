const getInputValue = (value) => {
    return value > 0 ? value : ``;
};

const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

const isEmptyParams = (params) => {
    return Object.values(params).filter(item => item > 0).length === 0;
}

const formatNumber = (number) => {
    return number.toLocaleString();
};

export {
    getInputValue,
    isEmptyObj,
    isEmptyParams,
    formatNumber,
};
