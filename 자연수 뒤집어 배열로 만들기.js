// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴

function solution(n){
    var answer = [];
    let str = n.toString();
    for(let i = str.length-1; i>=0; i--){
        answer.push(+str[i]);
    }
    return answer;
}

console.log(solution(12345));