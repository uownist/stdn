n = int(input("Enter your range (eg. 30): "))
sum = 0

for i in range(1, n + 1):
    sum += i

print(sum)

print("\n")

# ---------------
# shortcut method using formula
# ---------------
total = (n * (n + 1)) / 2
print(total)
