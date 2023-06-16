/*
BOJ_1920 (수 찾기)
*/
let fs = require('fs');
/*
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// n배열에 m배열의 요소가 포함되는지 확인
let cntn = input.shift();
let n = input.shift().split(' ').map(n => parseInt(n));
let cntm = input.shift();
let m = input.shift().split(' ').map(m => parseInt(m));
*/
let cntn = 5;
let n = [4, 1, 5, 2, 3];
let cntm = 5;
let m = [1, 3, 7, 9, 5];
let k = [];

// 비교 함수를 이용한 오름차순 정렬
[n, m].forEach((arr) => {
    arr.sort((a, b) => {
        return a - b;
    });
});

function binSearch(arr, trgt) {
    let mid = Math.trunc(arr.length / 2); // 중앙 인덱스
    let comp = arr[mid] < trgt; // 비교 결과

    if(arr[mid] == trgt) return true; // 발견 ㄴㅇㄱ

    if(comp) { // m의 후반부에서 탐색
        let r = binSearch(arr.slice(mid), trgt);
        return r;
    } else { // m의 전반부에서 탐색
        let r = binSearch(arr.slice(0, mid), trgt);
        return r;
    }

    return false;
}

for(let i = 0; i < cntm; i++) {
    console.log(binSearch(n, m[i]) ? 1 : 0);
}