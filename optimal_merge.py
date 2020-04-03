from heapq import heappush, heappop, heapify
import math


def merge(first_list, second_list):
    # both of these will be used for for loop at the end
    index_start = 0
    index_end = len(first_list) + len(second_list)

    # append infinity at the end of first list
    first_list.append(float("inf"))
    print("first list is: " + str(first_list))

    # append infinity at the end of second list
    second_list.append(float("inf"))
    print("Second list is: " + str(second_list))

    temp_index_i = 0
    temp_index_j = 0
    output_data = []
    for value in range(index_start, index_end):
        if first_list[temp_index_i] < second_list[temp_index_j]:
            output_data.insert(value, first_list[temp_index_i])
            temp_index_i += 1
        else:
            output_data.insert(value, second_list[temp_index_j])
            temp_index_j += 1
    print(output_data)
    return output_data


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
    size1, list_array1 = heappop(heap)
    size2, list_array2 = heappop(heap)
    list_array3 = merge(list_array1, list_array2)
    size3 = len(list_array3)



# sorted input arrays which needs to be merged
first_list = [2, 3, 5, 8, 9]
second_list = [5, 9]
third_list = [9, 8, 2, 6]
forth_list = [10]

print(optimal_merge(first_list, second_list, third_list, forth_list))
