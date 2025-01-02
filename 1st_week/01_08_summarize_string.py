input_str = "acccdeee"
"""
Q.
1. 입력으로 소문자의 알파벳 순으로 정렬된 문자열이 입력됩니다.
2. 각 알파벳은 중복이 가능합니다.
3. 중간에 없는 알파벳이 있을 수도 있습니다.
각 알파벳의 종류,갯수를 요약하여 나타내시오.
"""
def summarize_string(input_str):
    result_arr = [[input_str[0], 1]]
    result_string = ""
    # 1. 이미 정렬된 상태이기에, 이웃하는 원소끼리 비교
    for index in range(len(input_str)-1):
        if input_str[index] == input_str[index+1]:
            result_arr[-1][1] += 1
        elif input_str[index] != input_str[index + 1] and input_str[index + 1] != '':
            result_arr.append([input_str[index+1],1])

    for element in result_arr:
        result_string += element[0]
        result_string += str(element[1])
        result_string += "/"
    return result_string.rstrip('/')

print(summarize_string(input_str))