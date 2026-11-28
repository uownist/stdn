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

print("\n")

print("------------------------------------------")

print("\n")

# ==========================
# HOMEWORK
# ==========================

# 1. create a list at least six numbers in order. print the original list. use sorted() and print the result. print the original list again to verify that it was not changed
rand_nums = [56, 48, 23, 95, 45]

print(f"original rand_nums ---> {rand_nums}")
rand_nums.sort()
print(f"sorted rand_nums ---> {rand_nums}")

# 2. take the same list and: use sorted(reverse=True). print the result in descending order. print the original list again
rand_nums2 = [52, 3, 65, 78, 9, 89]

sorted_rand_nums = sorted(rand_nums2)
print(f"deafult rand_nums2 ---> {rand_nums2}")
print(f"sorted_rand_nums2 ---> {sorted_rand_nums}")

# 3. permanently sort the list using sort()
ma_nums = [36, 52, 89, 45, 33]

ma_nums.sort()
print(ma_nums)

# 3. permanently sort the list in descending order
ma_nums.sort(reverse=True)
print(ma_nums)

# 5. create a list of at least five strings. sort the list alphabetically and then in reverse order.
countries = ["bangladesh", "america", "japan", "canda"]

countries.sort()
print(countries)

countries.sort(reverse=True)
print(countries)
