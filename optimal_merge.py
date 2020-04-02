from heapq import heappush, heappop, heapify


def optimal_merge(first_list, second_list, third_list, forth_list):
    # get the lenght of the each list
    size_first = len(first_list)
    size_second = len(second_list)
    size_third = len(third_list)
    size_forth = len(forth_list)

    # create a tuple based on the size of the list and the list
    data = [
        (size_first, first_list),
        (size_second, second_list),
        (size_third, third_list),
        (size_forth, forth_list)
    ]
    print(data)
    heap = heapify(data)
    a,b = heappop(heap)


# sorted input arrays which needs to be merged
first_list = [2, 3, 5, 8, 9]
second_list = [5, 9]
third_list = [9, 8, 2, 6]
forth_list = [10]

print(optimal_merge(first_list, second_list, third_list, forth_list))
