function solution(clothes) {
    // 1. 종류별로 몇 개의 상품이 있는지 체크
    let clothesCount = {};
    for (let i = 0; i < clothes.length; i++) {
        let category = clothes[i][1];
        //같은 종류이면 키 값 증가
        if (clothesCount[category]) {
            clothesCount[category]++;
        } else {
            //종류 첫 상품이면 키 값 1로 초기화
            clothesCount[category] = 1;
        }
    }
    
    // 2. 경우의 수 계산
    let answer = 1;
    console.log(clothesCount)
    for (let category in clothesCount) {
        //선택하지않는 경우도 생각해줘야하니까 +1
        answer *= (clothesCount[category] + 1);
    }
    
    // 3. 아무것도 입지 않은 경우를 제외
    return answer - 1;
}