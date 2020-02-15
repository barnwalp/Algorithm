import math
import sys

# print(sys.setrecursionlimit(2500))
print(sys.getrecursionlimit())


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
    print(output_data)
    return output_data


def merge_sort(input_data, index_start, index_end):
    if index_start < index_end:
        index_mid = math.floor((index_start + index_end) / 2)
        print("merge_sort is being called with " + "starting index at: " + str(index_start) + " & ending index at: " + str(index_mid))
        merge_sort(input_data, index_start, index_mid)
        print("merge_sort is being called with " + "starting index at: " + str(index_mid + 1) + " & ending index at: " + str(index_end))
        merge_sort(input_data, (index_mid + 1), index_end)
        print("merge is being called with " + "starting index at: " + str(index_start) + " middle index at: " + str(index_mid) + " & ending index at: " + str(index_end))
        output_data = merge(input_data, index_start, index_mid, index_end)
        for index in range(len(output_data)):
            input_data[index] = output_data[index]



input_data = [8, 5, 9, 7, 6, 10]
index_start = 0
index_end = len(input_data) - 1
recursive_call = 1
print(merge_sort(input_data, index_start, index_end))
# index_mid = math.floor(index_end / 2)
# print(index_mid)
# print(index_end)
# print(merging(input_data, index_start, index_mid, index_end))

