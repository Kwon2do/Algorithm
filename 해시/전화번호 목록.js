function solution(phone_book) {
    //전화번호부 정렬
    phone_book.sort();
    //인접한 전화번호끼리 서로 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        let number1 = phone_book[i];
        let number2 = phone_book[i + 1];
        //앞 번호 길이만큼 잘라서, 접두어인지 확인
        let check_number = number2.slice(0, number1.length);
        if (number1 === check_number) {
            return false;
        }
    }
    return true;
}