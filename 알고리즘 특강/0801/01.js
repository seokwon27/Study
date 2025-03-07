// 가위바위보 코드 작성

function rockPaperScissors(a, b) {
	if(a === b) return '무승부'
    return a + b === '가위보' || '바위가위' || '보바위' && 'b 승리'
}
// 9가지 경우의 수 테스트
console.log(rockPaperScissors('가위', '보'));
console.log(rockPaperScissors('가위', '가위') === '무승부');
console.log(rockPaperScissors('가위', '바위') === 'b 승리');
console.log(rockPaperScissors('가위', '보') === 'a 승리');
console.log(rockPaperScissors('바위', '가위') === 'a 승리');
console.log(rockPaperScissors('바위', '바위') === '무승부');
console.log(rockPaperScissors('바위', '보') === 'b 승리');
console.log(rockPaperScissors('보', '가위') === 'b 승리');
console.log(rockPaperScissors('보', '바위') === 'a 승리');
console.log(rockPaperScissors('보', '보') === '무승부');