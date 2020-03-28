# def huffman(freqtable):
#     from collections import defaultdict
#     from heapq import heappush, heappop, heapify
#
#     code = defaultdict(list)


input_data = "I like huffman codes more than brussels sprouts"
master_data = ("","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z")
frequency = {}

for char in master_data:
    if char in input_data:
        frequency[char] = input_data.count(char)
    else:
        frequency[char] = 0

print(frequency)