    let array = [-1,-3,5];

function solution(array) {
    
    let myarr = array.sort((a,b) => a-b);
    return myarr[(array.length-1)/2]

}

console.log(solution(array));