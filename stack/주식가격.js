function solution(prices) {
    var answer = [];
    for(let i=0; i<prices.length; i++){
        //가격이 떨어지지 않은 시간
        let count = 0;
        for(let j=i+1; j<prices.length; j++){
            count++;
            //만약에, 바로 뒤 가격이 감소했으면 거기까지만 측정
            if(prices[i]>prices[j]){
                break;
            }
        }
        answer.push(count);
    }
    return answer;
}

/* 시간복잡도 O(n^2) */