//배열 만들기

function solution (x, n){
    var answer = [];
    for(let i = 1; i <= n; i++ ){
        answer.push(i*x)
    }

    return answer;
}

console.log(solution(-4,3));