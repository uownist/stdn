# ==============================
# sorting ---> choto theke boro (default)
# ==============================
numbers = [2, 5, 49, 8, 23, 74, 1]

numbers.sort()  # ---> permanently sorted hoye zabe
print(numbers)

print("\n")

# ======================================================

nums = [56, 21, 9, 78, 23, 4589]

sorted_nums = sorted(nums)
print(f"nums --> {nums}")
print(f"sorted_nums ---> {sorted_nums}")

print("\n")

# using sort methode on string
programming_lang = [
    "python",
    "javascript",
    "go",
    "rust",
    "ada",
    "assebly",
    "java",
    "cpp",
    "dart",
]
programming_lang.sort()
print(programming_lang)

print("\n")

# ==========================
# sorting ---> boro theke choto (bole dite hobe: using reverse() method)
# ==========================
prices = [20, 10, 50, 40]

prices.sort(reverse=True)
print(prices)

expense = [50, 20, 456, 521]

sorted_expense = sorted(expense, reverse=True)
print(sorted_expense)

cars = ["lambo", "bugati", "bmw", "ferari", "audi"]
print(f"default list ---> {cars}")

cars.reverse()
print(f"reverse cars ---> {cars}")

# get lists length
print(len(cars))
