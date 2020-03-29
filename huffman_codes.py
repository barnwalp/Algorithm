from operator import attrgetter, itemgetter

# def huffman(freqtable):
#     from collections import defaultdict
#     from heapq import heappush, heappop, heapify
#
#     code = defaultdict(list)


input_data = "i like huffman codes more than brussels sprouts"
master_data = ("", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
               "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")

# create a empty tuple
freq = {}
print(type(freq))

for char in input_data:
    freq[char] = input_data.count(char)

print(type(freq))
print(freq)

# converting dictionary into list of tuples
frequency = [(x, y) for (y, x) in freq.items()]
print(frequency)
frequency = sorted(frequency, key=itemgetter(0))
print(frequency)

