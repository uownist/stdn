# ---------- simple list overview ----------
fruits = ["apple", "banana", "mango", "lichi"]
print(fruits)

# list indexing
print(fruits[2])

# list slicing
print(fruits[2:])  # ['mango', 'lichi']
print(fruits[:3])  # ['apple', 'banana', 'mango']
print(fruits[1:3])  # ['banana', 'mango']

print("\n")  # for new empty line

# ---------- list method ----------
fruits.append("orange")
print(fruits)  # ['apple', 'banana', 'mango', 'lichi', 'orange']

fruits.remove("banana")
print(fruits)  # ['apple', 'mango', 'lichi', 'orange']

fruits.pop()
print(fruits)  # ['apple', 'mango', 'lichi']

fruits.insert(0, "grave")
print(fruits)  # ['grave', 'apple', 'mango', 'lichi']

fruits.sort()
print(fruits)  # ['apple', 'grave', 'lichi', 'mango']

print(len(fruits))  # 4

for fruit in fruits:
    print(fruit.capitalize())
