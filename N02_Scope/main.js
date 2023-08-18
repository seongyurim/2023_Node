import {value, vvalue, cvalue, print} from './global.js';

let a = 10;

function f1() {
    let a = 20;
    f2();
}

function f2() {
    console.log(a); // 10 // global_a가 선택된다.
}

f1(); // 10
f2(); // 10