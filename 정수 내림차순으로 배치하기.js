// 정수 n 의 각 자릿수를 큰것부터 작은 순으로 리턴

/** 
 * 방법
 * 정수를 자릿수별로 요소 쪼개기 = split
 * 배열 내림차순 정렬 = sort
 * 각 요소를 하나로 합치기 = join
 */

function solution(n){
 return +(n.toString().split('').sort((a,b) => b-a).join(''));
}

