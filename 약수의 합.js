//주어진 정수 n의 약수를 모두 더한 값
/**
 * 1. 정수 n을 나누어서 
 */


function solution(n) {
    var answer = 0;
    let arr = [];
    
    //n을 나누었을 때 나머지가 0이 되는 수(약수)의 배열 만들기
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i)
        }

    }
    //배열의 합
    answer = arr.reduce((a,b) => a + b, 0);
    return answer; //=약수의 합
}

console.log(solution(10));