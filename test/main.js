const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter((value, i) => {
  return array.indexOf(value) == i;
});

console.log(result);


const leapYear = year => {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
  ) {
    return console.log(year + "年はうるう年です。");
  }
  else {
    return console.log(year + "年はうるう年ではありません。");
  }
};
leapYear(2021);