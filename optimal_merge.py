from heapq import heappush, heappop, heapify
import math


def merge(input_data, index_start, index_mid, index_end):
    part_list1 = []
    part_list2 = []
    for value in range(index_start, (index_mid+1)):
        part_list1.append(input_data[value])
    part_list1.append(float("inf"))
    print("Part_list_1 is: " + str(part_list1))
    for value in range((index_mid+1), (index_end+1)):
        part_list2.append(input_data[value])
    part_list2.append(float("inf"))
    print("Part_list_2 is: " + str(part_list2))
    temp_index_i = 0
    temp_index_j = 0
    output_data = []
    for value in range(index_start, (index_end+1)):
        if part_list1[temp_index_i] < part_list2[temp_index_j]:
            output_data.insert(value, part_list1[temp_index_i])
            temp_index_i += 1
        else:
            output_data.insert(value, part_list2[temp_index_j])
            temp_index_j += 1
    for index in range(len(output_data)):
        input_data[index_start] = output_data[index]
        index_start += 1
    print(input_data)
    return input_data


def optimal_merge(first_list, second_list, third_list, forth_list):

    # get the length of the each list
    size_first = len(first_list)
    size_second = len(second_list)
    size_third = len(third_list)
    size_forth = len(forth_list)

    # create a tuple based on the size of the list and the list
    heap = [
        (size_first, first_list),
        (size_second, second_list),
        (size_third, third_list),
        (size_forth, forth_list)
    ]
    heapify(heap)
    print("heapified lists are: " + str(heap))


# sorted input arrays which needs to be merged
first_list = [2, 3, 5, 8, 9]
second_list = [5, 9]
third_list = [9, 8, 2, 6]
forth_list = [10]

print(optimal_merge(first_list, second_list, third_list, forth_list))
