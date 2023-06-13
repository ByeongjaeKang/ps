/*
BOJ_2156 (포도주 시식)
*/
const fs = require('fs');

//const input = fs.readFileSync('/dev/stdin').toString();
const input = "3\n1\n5\n4";
let amount = input.split('\n').map(i => parseInt(i));
let nglass = amount[0];

console.log(amount, nglass);