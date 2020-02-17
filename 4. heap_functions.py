import math

def max_heapify(input_data, root):
    left_child = 2 * root + 1
    right_child = 2 * root + 2
    heapsize = len(input_data) - 1
    if left_child <= heapsize and input_data[left_child] > input_data[root]:
        largest = left_child
    else:
        largest = root
    if right_child <= heapsize and input_data[right_child] > input_data[largest]:
        largest = right_child
    if largest is not root:
        temp = input_data[root]
        input_data[root] = input_data[largest]
        input_data[largest] = temp
        max_heapify(input_data, largest)
    return input_data


def build_max_heap(input_data_):
    heapsize = len(input_data) - 1
    # leaf node starts from floor((heapsize-1)/2)+1 to n




input_data = [4, 6, 5, 0, 8, 2, 7, 1, 3]
input_data1 = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]
root = 0
print(max_heapify(input_data, root))



