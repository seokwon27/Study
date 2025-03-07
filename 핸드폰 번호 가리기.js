/*
전화번호가 문자열 phone_number로 주어졌을 때,
 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수를완성해주세요.
*/

// 각 숫자를 요소로 갖는 배열 - 내용 수정  - 결합?

let phone_number = "027778888"
function solution(phone_number) {
    var answer = '';
    let arr = [...phone_number];
    for(let i = 0; i < phone_number.length; i++){
        if(i < phone_number.length-4){
            answer += "*";
        } else{
        answer += `${phone_number[i]}`;
        }
    }
    return answer;
}

console.log(solution(phone_number));

// 문자열 바로 수정??? 문자열 인덱스 수정? 