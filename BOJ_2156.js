/*
BOJ_2156 (포도주 시식)
*/
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
let glass = input.split('\n').map(i => parseInt(i));
let count = glass.shift();

console.log(count, glass);