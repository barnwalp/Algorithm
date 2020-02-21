def counting_sort(input_data, size):
    # create an empty list of length "range"
    key = [0] * (size + 1)
    # print(key)
    for index in input_data:
        key[index] = key[index]+1
    # print(key)
    output_data = []
    for index in range(size+1):
        while key[index] > 0:
            output_data.append(index)
            # print(output_data)
            key[index] = key[index]-1
            # print(key[index])
    return output_data

# input_data = [2, 3, 2 ,5, 1, 0, 4, 5, 4]
input_data = [2, 2, 2, 0, 5, 3, 2 ,5, 1, 0, 4, 5, 4]
size = 5
print(counting_sort(input_data, size))