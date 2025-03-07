//n을 x로 나눈 나머지가 1이 되는 가장 작은 자연수 x를 리턴

//
function solution(n){
    var answer = 0;
    let arr = [];

    for(let i = 0; i < n; i++ ){
        if(n % i == 1){
            arr.push(i)
        }
    }
    answer = Math.min(...arr);
    return answer;
}

//다른사람의 풀이
