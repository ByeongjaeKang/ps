/*
BOJ_1920 (수 찾기)
*/
const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 배열 m 의 요소 중 배열 n 에 포함된 값이 존재하는지 확인
let cntn = input.shift();
let n = input.shift().split(' ').map(n => parseInt(n));
let cntm = input.shift();
let m = input.shift().split(' ').map(m => parseInt(m));

[n, m].forEach((arr) => {
    arr.sort((a, b) => {
        return a - b;
    });
});

console.log(n, m);