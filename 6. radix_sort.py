
input_data = [804, 26, 5, 52, 10]
digit = 0
print(digit)
for value in input_data:
    digit1 = 0
    while value >= 1:
        value = value/10
        digit1 += 1
    if digit < digit1:
        digit = digit1

print(digit)