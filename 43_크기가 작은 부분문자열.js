/**
 * 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서,
 * 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.
 *
 * 예를 들어, t="3141592"이고 p="271" 인 경우,
 *  t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다.
 * 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.
 */

function solution(t, p) {
  let answer = 0;

  for (let i = 0; i + p.length <= t.length; i++) {
    //slice 메서드 기능을 3개의 메서드로 구현한 비효율적 구조 = 내가 작성함..ㅠ
    let subString = Number(
      t
        .split("")
        .filter((_, index) => {
          return i <= index && index < i + p.length;
        })
        .join("")
    );
    if (subString <= Number(p)) {
      answer += 1;
    }
  }
  return answer;
}

//다른사람 풀이

function solution(t, p) {
  let answer = 0;

  for (let i = 0; i + p.length <= t.length; i++) {
    //복잡하게 작성했던 코드를 slice 메서드로 대체
    let subString = t.slice(i, i + p.length);
    if (subString <= +p) {
      answer += 1;
    }
  }
  return answer;
}
