/**
 * 1-1 입력된 수가 짝수라면 2로 나눈다
 * 1-2 입력된 수가 홀수라면 3을 곱하고 1을 더한다
 * 2. 위를 1이 될 때까지 반복한다
 * 
 * 1이 될 때 까지 반복 횟수를 출력하는 함수를 완성해주세요
 * 단 주어진 수 가 1일 때는 0을 500번 반복할때까지 1이 되지 않는다면 -1을 반환해 주세요.
 */

function solution(num) {
    let answer = 0;
    for (let i = 0; i < 500; i++) {
        if (num !== 1) {
            if (num % 2 == 0) {
                num = num / 2;
            } else {
                num = (num * 3) + 1;
            }
        } else {
            return i;
        }
    }
}
console.log(solution(6))