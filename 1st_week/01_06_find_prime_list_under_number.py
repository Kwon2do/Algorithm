# 주어진 수보다 작은 소수 구하기

def find_prime_list_under_number(number):
    result = []
    for i in range(2, number+1):
        ## 1번째 방법 => 모두 순회 (가장 비효율적)
        ##for j in range(2, i):
        ## 1차 개선 => 기존 소수 배열을 활용(2와 3으로 안나눠지면, 2x3인 6으로도 안나누어진다)
        for j in result:
            ## if i%j == 0:
            ## 2차 개선 => 소수의 특징(N은 N의 제곱근보다 크지 않은 어떤 소수로도 나눠지지 않는다)
            if i%j == 0 and j * j <= i:
                break
        else:
            result.append(i)
    return result
result = find_prime_list_under_number(20)
print(result)