input = "011110"

"""
Q.
0과 1로만 이루어진 문자열이 주어졌을 때, 이 문자열에 있는 모든 숫자를 전부 같게 만들려고 한다.
할 수 있는 행동은 문자열에서 연속된 하나 이상의 숫자를 잡고 모두 뒤집는 것이다.
주어진 문자열을 모두 0 혹은 모두 1로 같게 만드는 최소 횟수를 반환하라.
"""

def find_count_to_turn_out_to_all_zero_or_all_one(string):
    # 모두 0으로 만드는 횟수와 모두 1로 만드는 횟수 중 최소값 반환
    # 전체를 0 or 1로 만들기 위한 횟수
    count_arr = [0,0]
    # 첫 원소가 0이면, 모두 1로 만들려면 최소 1회가 필요
    if string[0] == '0':
        count_arr[1] += 1
    elif string[0] == '1':
        count_arr[0] += 1
    for i in range(len(string)-1):
        # 같다면(연속된 숫자) 패스, 다르면 뒤집기 위한 횟수 증가
        if string[i] != string[i+1]:
            if string[i+1] == '0':
                count_arr[1] += 1
            if string[i+1] == '1':
                count_arr[0] += 1
    return min(count_arr)
result = find_count_to_turn_out_to_all_zero_or_all_one(input)
print(result)