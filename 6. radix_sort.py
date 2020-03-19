# def radix_sort(input_data, digit):
#     while digit > 0:
#         # create an empty list of length 9
#         key = [0] * 10
#         # print(key)
#         for index in (input_data % 10):
#             key[index] = key[index]+1
#         # print(key)
#         output_data = []
#         for index in range(10):
#             while key[index] > 0:
#                 output_data.append(index)
#                 # print(output_data)
#                 key[index] = key[index]-1
#                 # print(key[index])
#     return output_data
#
#
# input_data = [804, 26, 5, 52, 10]
# digit = 0
# print(digit)
# for value in input_data:
#     digit1 = 0
#     while value >= 1:
#         value = value/10
#         digit1 += 1
#     if digit < digit1:
#         digit = digit1
# # print(digit)
# print(radix_sort(input_data, digit))


# Python program for implementation of Radix Sort

# A function to do counting sort of arr[] according to
# the digit represented by exp.
def countingSort(arr, exp1):
    n = len(arr)

    # The output array elements that will have sorted arr
    output = [0] * (n)

    # initialize count array as 0
    count = [0] * (10)

    # Store count of occurrences in count[]
    for i in range(0, n):
        index = (arr[i] / exp1)
        count[(index) % 10] += 1

    # Change count[i] so that count[i] now contains actual
    #  position of this digit in output array
    for i in range(1, 10):
        count[i] += count[i - 1]

        # Build the output array
    i = n - 1
    while i >= 0:
        index = (arr[i] / exp1)
        output[count[(index) % 10] - 1] = arr[i]
        count[(index) % 10] -= 1
        i -= 1

    # Copying the output array to arr[],
    # so that arr now contains sorted numbers
    i = 0
    for i in range(0, len(arr)):
        arr[i] = output[i]

    # Method to do Radix Sort


def radixSort(arr):
    # Find the maximum number to know number of digits
    max1 = max(arr)

    # Do counting sort for every digit. Note that instead
    # of passing digit number, exp is passed. exp is 10^i
    # where i is current digit number
    exp = 1
    while max1 / exp > 0:
        countingSort(arr, exp)
        exp *= 10


# Driver code to test above
arr = [170, 45, 75, 90, 802, 24, 2, 66]
radixSort(arr)

for i in range(len(arr)):
    print(arr[i]),

# This code is contributed by Mohit Kumra
