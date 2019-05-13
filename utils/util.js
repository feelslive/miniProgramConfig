const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
//时间戳转标准时间 年月日
const formatDateYMD = time => {
  var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return Y + M + D;
};
//时间戳转标准时间 年月日时分
const formatDateYMDHM = time => {
  var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds();
  return Y + M + D + h + m;
};

const trim = str => {
  return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
};
const isPhone = phone => {
  return /^1[3456789]\d{9}$/.test(phone);
};
const isNum = num => {
  return /[1-9]\d{5}$/.test(num);
};
const hidePhone = str => {
  return str.substr(0, 3) + "****" + str.substr(7);
};
//算距离
const distance = (la1, lo1, la2, lo2) => {
  var La1 = (la1 * Math.PI) / 180.0;
  var La2 = (la2 * Math.PI) / 180.0;
  var La3 = La1 - La2;
  var Lb3 = (lo1 * Math.PI) / 180.0 - (lo2 * Math.PI) / 180.0;
  var s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(La3 / 2), 2) +
          Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)
      )
    );
  s = s * 6378.137; //地球半径
  s = Math.round(s * 10000) / 10000;
  return s;
  // console.log("计算结果",s)
};
//排序
const sortNumber = (a, b) => {
  return a - b;
};
const dedupe = array => {
  return Array.from(new Set(array));
};
const rColor = () => {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
};

module.exports = {
  trim,
  isNum,
  isPhone,
  hidePhone,
  distance,
  dedupe,
  rColor,
  sortNumber,
  formatDateYMD,
  formatDateYMDHM,
  formatTime: formatTime
};
