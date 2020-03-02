def radix_sort(input_data, digit):
    while digit > 0:
        # create an empty list of length 9
        key = [0] * 10
        # print(key)
        for index in (input_data % 10):
            key[index] = key[index]+1
        # print(key)
        output_data = []
        for index in range(10):
            while key[index] > 0:
                output_data.append(index)
                # print(output_data)
                key[index] = key[index]-1
                # print(key[index])
    return output_data


input_data = [804, 26, 5, 52, 10]
digit = 0
print(digit)
for value in input_data:
    digit1 = 0
    while value >= 1:
        value = value/10
        digit1 += 1
    if digit < digit1:
        digit = digit1
# print(digit)
print(radix_sort(input_data, digit))
