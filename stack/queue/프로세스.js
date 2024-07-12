//큐는 LIFO
//꺼냈는데, 뒤에 우선순위 높은게 있으면 맨 뒤로 가버림
function solution(priorities, location) {
    var answer = 0;
    //원래 위치 기억용
    var prior = [];
    //max(...배열명)하면 배열 원소 중 최댓값을 뽑아낼 수 있음.
    let max_value = Math.max(...priorities);
    
    priorities.map((_,index)=>{prior.push(index)})
    console.log(prior)

    while(priorities.length !== 0) {
        max_value = Math.max(...priorities);
        //가장 최우선이 아니면, 밀려남
        if(priorities[0]<max_value){
            //뒤로갈 때는 정해진 위치 배열도 함께 이동
            priorities.push(priorities.shift());
            prior.push(prior.shift());
        }
        else{
            answer+=1;
            priorities.shift();
            if(prior.shift() == location){
                return answer;
            }
        }
    }
}