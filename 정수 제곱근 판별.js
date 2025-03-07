//n이 양의 정수 x의 제곱이면 (x+1)**2 아니라면 -1 리턴

/**
 * pow  특정숫자의 거듭제곱 값을 계산
 *  Math.pow(숫자,제곱횟수)
 * sqrt  특정숫자의 제곱근 값을 계산
 *  Math.sqrt(숫자)
 */

function solution(n) {
    var answer = 0;
    let x = Math.sqrt(n);
    
    if(x%1===0){
        answer = (x+1)**2
    } else {
        answer = -1
    }
    return answer;
}

console.log(solution(144));