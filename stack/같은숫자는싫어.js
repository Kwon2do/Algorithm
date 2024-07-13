function solution(arr)
{
    //직전 원소와 같으면 버리고, 다르면 answer 배열에 넣기
    var answer = [];
    //초기값은 arr의 첫 원소
    answer.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        //비교할 arr배열에 담긴 원소
        var state = arr[i];
        //answer배열에 마지막으로 push된 원소와 비교
        if(answer[answer.length-1] != state){
            answer.push(state);
        }
    }
    return answer;
}

/* 시간복잡도: O(n) */