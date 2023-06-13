/*
BOJ_1463 (1로 만들기)
힌트: 10의 경우에 10 -> 9 -> 3 -> 1 로 3번 만에 만들 수 있다.

DP 개념의 핵심인 재귀와 메모이제이션을 적용하는 것이 핵심인 문제로,
풀면서 중요하게 생각한 부분에는 주석 뒤에 '*' 을 표기하였습니다.
*/
const fs = require('fs');

let input = parseInt(fs.readFileSync('/dev/stdin'));
let cnt = null;
let m = [];

if(!(input >= 1 && input <= 10 ** 6)) { // 입력은 1 이상이면서 10^6 이하의 값입니다.
    console.error('invalid range.');
    process.exit(1);
}

function dp(n, c = 0) {
    if(m[n]) { // 입력 n에 대한 연산 결과가 배열 m에 존재하는지 확인합니다.*
        c += m[n];
        n = 1;
    }
    if(n % 3 == 0 && n >= 3) { // n이 3이상이면서 3으로 나누어 떨어지는지 확인합니다.
        dp(n / 3, ++c);
        c--; // 재귀 실행이 완료되었다면 c(재귀 횟수 카운터)을 복원합니다.
    }
    if(n % 2 == 0 && n >= 2) { // 이하 동일
        dp(n / 2, ++c);
        c--;
    }
    if(n > 1) {
        dp(n - 1, ++c);
        c--;
    }

    if(!cnt) cnt = c;
    if(c < cnt && n == 1) cnt = c; // 더 작은 횟수를 발견하면 cnt를 갱신합니다.
}

for(let i = 1; i <= input; i++) { // 입력값 N에 대하여 1 ~ N 순으로 탐색하면서, 동시에 연산 결과를 배열 m에 저장합니다. 이렇게 하여 중복 연산을 피합니다.*
    dp(i);
    m[i] = cnt;
    cnt = null;
}

console.log(m[input]);