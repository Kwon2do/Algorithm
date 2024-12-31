def is_number_exist(number, array):
    for compare_number in array:
        if compare_number == number:
            return True
    return False
result = is_number_exist

# -> 최선의 경우에는 1만큼의 연산만 필요하다.
print("정답 = True 현재 풀이 값 =", result(3, [3,5,6,1,2,4]))
# -> 이 경우에는 배열의 끝까지 찾아야해서 시간복잡도가 N만큼 걸린다.
print("정답 = Flase 현재 풀이 값 =", result(7, [6,6,6]))
print("정답 = True 현재 풀이 값 =", result(2, [6,9,2,7,1888]))