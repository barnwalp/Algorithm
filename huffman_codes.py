from operator import itemgetter


def huffman(frequency):
    from collections import defaultdict
    from heapq import heappush, heappop, heapify

    code = defaultdict(list)

    # items in heap are tuples containing a list of letters and the
    # combined frequencies of the letters in the list
    heapify(frequency)

    # reduce the heap to a single item by combining the two items
    # with the lowest frequencies
    while len(frequency) > 1:
        freq0, letters0 = heappop(frequency)
        for ltr in letters0:
            code[ltr].insert(0, '0')
        freq1, letters1 = heappop(frequency)
        for ltr in letters1:
            code[ltr].insert(0, '1')
        heappush(frequency, (freq0 + freq1, letters0 + letters1))
    for k, v in code.items():
        code[k] = ''.join(code[k])
    return code


input_data = "i like huffman codes more than brussels sprouts"
master_data = ("", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
               "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")

# create a empty dictionary
freq = {}

for char in input_data:
    freq[char] = input_data.count(char)
print(freq)

# converting dictionary into list of tuples
frequency = [(x, y) for (y, x) in freq.items()]
frequency = sorted(frequency, key=itemgetter(0))
print(frequency)

print(huffman(frequency))
