/*
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

let arr = [9, 7];
function solution(arr, divisor){
    let myArr = [];
    arr.sort(function(a,b){return a-b});
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % divisor === 0){
            myArr.push(arr[i]);
        }
    }
    if(myArr.length < 1){
        myArr = [-1];
    }
    return myArr;
}
console.log(solution(arr, 5));



// 다른사람 풀이 [filter]

function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b); //삼항연산자
}