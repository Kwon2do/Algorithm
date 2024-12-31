# 반복되지 않는 첫 번째 알파벳 반환(없으면 _반환)
def find_not_repeating_first_character(string):
    # 반복 여부 판단
    # 빈도수 구한 뒤, 이를 활용
    occurrence_array = [0] * 26
    # O(n)
    for char in string:
        print(char)
        if not char.isalpha():
            continue
        # ord-> 문자를 아스키 코드로 변환
        arr_index = ord(char) - ord('a')
        occurrence_array[arr_index] += 1
    not_repeating_char_array = []
    # occurrence_array는 26개 -> O(1)
    for index in range(len(occurrence_array)):
        alphabet_occurrence = occurrence_array[index]
        if alphabet_occurrence == 1:
            not_repeating_char = chr(index+ord('a'))
            not_repeating_char_array.append(not_repeating_char)
    # 반복되지 않는 첫 번째 알파벳 반환 O(n)
    for char in string:
        if char in not_repeating_char_array:
            return char
    # 존재하지않으면 _ 반환
    return "_"
result = find_not_repeating_first_character

print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))