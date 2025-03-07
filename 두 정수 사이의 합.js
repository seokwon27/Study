//두 정수 a, b 가 주어졌을 대 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수
// 예) (3, 5) : 3 + 4 + 5 = 12
// "가우스 공식" a 부터 b 까지의 모든 숫자의 합 활용

function solution(a, b) {
    return (a+b)*(Math.abs(b-a)+1)/2 // Math.abs() 절대값 매소드
     
 }