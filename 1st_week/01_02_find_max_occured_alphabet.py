def find_max_occurred_alphabet(string):
    # [0 * 26] 각 알파벳의 빈도수를 저장한 배열을 만든다.
    # a: 0번쨰 인덱스 b: 1번째 인덱스 ...
    alphabet_occurrence_array = [0] * 26
    for char in string:
        if not char.isalpha():
            continue
        # ord-> 문자를 아스키 코드로 변환
        arr_index = ord(char) - ord('a')
        alphabet_occurrence_array[arr_index] += 1
    # 빈도수 저장된 배열 순회하면서 최빈값 추출
    max_occurrence = 0
    max_alphabet_index = 0

    for index in range(len(alphabet_occurrence_array)):
        alphabet_occurrence = alphabet_occurrence_array[index]
        if alphabet_occurrence > max_occurrence:
            max_occurrence = alphabet_occurrence
            max_alphabet_index = index
    max_alphabet = chr(ord('a') + max_alphabet_index)
    return max_alphabet


print("정답 = i 현재 풀이 값 =", find_max_occurred_alphabet("hello my name is dingcodingco"))
print("정답 = e 현재 풀이 값 =", find_max_occurred_alphabet("we love algorithm"))
print("정답 = b 현재 풀이 값 =", find_max_occurred_alphabet("best of best youtube"))
