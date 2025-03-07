/**
 * 정수 x 가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
 * ex) 18  자릿수의 합 1+8=9 18은 9로 나누어 떨어짐으로 하샤드 수이다.
 */


function solution(x) {
    var answer = true;
    let numbers = x.toString().split('').map(Number);
    let sum = numbers.reduce((a,b) => a+b);

    
     return (x%sum === 0 ? true : false );
}

console.log(solution(13));