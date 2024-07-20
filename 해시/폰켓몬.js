function solution(nums) {
    var answer = 0;
    //고유한 값으로 이루어진 배열
    let array = [...new Set(nums)]
    //종류가 선택할 개수보다 많으면, 모두 다른 종류 선택 가능
    if(array.length >= nums.length/2){
        answer = nums.length/2;
    }
    //종류가 선택할 개수보다 적으면, 현재 가진 종류만큼만 선택 가능
    else{
        answer = array.length;
    }
    return answer;
}