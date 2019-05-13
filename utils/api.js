const app = getApp();
const $http = require("./http.js");
const POST_HEADER = {
    header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
    }
};
/**
 * 获取用户信息
 * 
 * @param {*} param
 */
const getInfo = param => {
    return $http("/getInfo", param, "GET")
        .then(res => {
            return Promise.resolve(res);
        })
        .catch(err => {
            return Promise.reject(err);
        });
};


module.exports = {
    getInfo,
};