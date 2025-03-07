// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

let s = "try hello world";
function solution(s) {
  var answer = [];
  let words = s.split(" ");

  words.forEach((e) => {
    const str = e.split("");
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
      tmp += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    answer.push(tmp);
    console.log(answer.join(" "));
  });
  return answer.join(" ");
}

console.log(solution(s));
