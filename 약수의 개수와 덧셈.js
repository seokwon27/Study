/*
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*/

// 약수의 개수 구하기
function divisor(n) {
    let divnum = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divnum.push(i);
        }
    }
    return divnum.length;
}

// 해답함수
function solution(left, right){
    var answer = 0;
    for(let i = left; i <= right; i++){
        divisor(i) % 2 ===0 ? answer += i: answer -= i;
    }
    return answer;
    
}

console.log(solution(24,27));