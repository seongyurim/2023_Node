// 전역변수 설정
// let, var - 의미있는 차이는 없다.
// const - 상수화된다는 것 외에 별다른 차이는 없다.
let   value = 10;
var   vvalue = 20;
const cvalue = 30;

function print() {
    console.log(value);
    console.log(vvalue);
    console.log(cvalue);
}

export {value, vvalue, cvalue, print};