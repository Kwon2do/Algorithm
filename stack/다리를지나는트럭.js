function solution(bridge_length, weight, truck_weights) {
    //경과 시간
    var time = 0;
    //다리에 올라간 트럭 현황
    let bridge = Array(bridge_length).fill(0);
    //다리에 올라간 트력 무게
    let truckSum = 0;
    
    /*다리위에 트럭들이 완전히 건널 때까지 시간 계산해줘야해서*/
    //대기중인 트럭 남아있거나 다리 위에 트럭이 있으면 
    while (truck_weights.length > 0 || truckSum > 0) {
        time++;
        //다리 위에 올라간 트럭들은 빠져나가게 됨.
        truckSum -= bridge.shift();
        //만약, 대기중인 트럭이 남아있으면 다리에 계속 올림
        if (truck_weights.length > 0) {
            if (truckSum + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                bridge.push(truck);
                truckSum += truck;
            } else {
// 트럭이 올라갈 수 없으면 빈 공간 유지하고, 기존 다리에 있던 트럭들은 한칸 앞으로
                bridge.push(0); 
            }
        }
    }
    return time;
}

/* 시간복잡도: O(n) */