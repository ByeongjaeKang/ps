/*
BOJ_1920 (수 찾기)
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//const input = fs.readFileSync('./tc').toString().split('\n');

const cntn = input.shift();
const n = input.shift().split(' ').map(n => parseInt(n));
const cntm = input.shift();
const m = input.shift().split(' ').map(m => parseInt(m));
//const no = [...n];
let k = [];

// 비교 함수를 이용한 오름차순 정렬
n.sort((a, b) => {
    return a - b;
});

function binSearch(arr, trgt, left, right) {
    const range = right - left;
    const mid = left + Math.trunc(range / 2); // 중앙 인덱스
    const comp = arr[mid] < trgt; // 비교 결과

    if(arr[mid] == trgt) return true; // 발견 ㄴㅇㄱ
    if(range == 0) return false; // 탐색 구간 없음

    if(comp) { // m의 후반부에서 탐색
        return binSearch(arr, trgt, mid + 1, right);
    } else { // m의 전반부에서 탐색
        return binSearch(arr, trgt, 0, mid - 1);
    }
}

for(let i = 0; i < cntm; i++) {
    if(k[m[i]]) {
        console.log(1);
    } else {
        k[m[i]] = binSearch(n, m[i], 0, n.length - 1) ? 1 : 0;
        console.log(k[m[i]]);
    }
};