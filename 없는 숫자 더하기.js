/*
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
*/

// 0~9 배열에서 매개변수 요소 제거 후 남은 요소 더하기?
// 인덱스와 값의 불일치  요소 추가 + 정답 할당

let numbers = [1,2,3,4,6,7,8,0];
let answer = 0;
function solution(numbers){
    numbers.sort((a,b) => a-b);
    // console.log(numbers);
    for(let i = 0; i < 10; i++){
        if(numbers[i] !== i){
            numbers.splice(i,0,i);
            // console.log(numbers);
            answer += i;
            // console.log(i)
        }
    }
 return answer;
}
console.log(solution(numbers));
// arr.sort((a,b) => a-b)
// console.log(arr);

// 다른 사람 풀이 
// (0~9까지 더한값) 45 - (배열의 요소를 더한값) = (없는 수의 합)
// 를 이용한 풀이. (reduce 활용) 해보기!!