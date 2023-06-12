/* BOJ_1463 (1로 만들기)
힌트: 10의 경우에 10 -> 9 -> 3 -> 1 로 3번 만에 만들 수 있다. */
const fs = require('fs');

//let input = parseInt(fs.readFileSync('/dev/stdin'));
// 첫째 줄에 1보다 크거나 같고, 10^6보다 작거나 같은 정수 N이 주어진다.
let input = 3;
let cnt = null;
let m = [];

if(!(input >= 1 && input <= 10 ** 6)) {
    console.error('invalid range.');
    process.exit(1);
}

function dp(n, c = 0) {
    if(m[n]) {
        c += m[n];
        n = 1;
    }

    if(n % 3 && n >= 3) {
        dp(n / 3, ++c);
        c--;
    }
    if(n % 2 && n >= 2) {
        dp(n / 2, ++c);
        c--;
    }
    if(n > 1) {
        dp(n - 1, ++c);
        c--;
    }

    if(!cnt) cnt = c;
    if(c < cnt && n == 1) {
        cnt = c;
    }
}

for(let i = 1; i <= input; i++){
    dp(i);
    m[i] = cnt;
    cnt = null;
}

console.log(m[input]);