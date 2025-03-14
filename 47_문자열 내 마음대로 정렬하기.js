/**
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
 * 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 */

//testCase
// let a = ["sun", "bed", "car"];
// let b = ["abce", "abcd", "cdx"];

function solution(strings, n) {
  var answer = [];
  answer = strings.sort().sort((a, b) => {
    if (a[n] < b[n]) {
      return -1;
    }
    if ((a[n] = b[n])) {
      return 0;
    }
    if (a[n] > b[n]) {
      return 1;
    }
  });
  return answer;
}

console.log("solution(b,2) : ", solution(b, 2));
