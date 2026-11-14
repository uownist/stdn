# ----------------------- while loop -----------------------
count = 1

while count <= 5:
    print(f"count is {count}")
    count += 1


print("\n")  # fro a new line


# ----------------------- for loop -----------------------
# for loop structure:
# for loop_variable in range(start_value, end_value, step(optional)):
#     # do something
#     print(f"number {i}")

for n in range(1, 6):
    print(f"number: {n}")


print("\n")  # for a new line


# list print
friends = ["siyam", "sabbir", "niloy", "bappy", "sifat(vaista)"]

for f in friends:
    print(f.capitalize())


print("\n")  # for a new line

# ----------------------- loop control -----------------------
for i in range(1, 11):
    if i == 10:
        break
    print(i)


print("\n")  # for a new line

# continue
for n in range(1, 11):
    if n % 2 == 1:
        continue
    print(n)


print("\n")  # for a new line

# pass
for n in range(5):
    if n == 2:
        pass
    print(n)


print("\n")  # for a new line


# nested loop
for i in range(1, 4):
    for j in range(1, 4):
        print(i, "x", j, "=", i * j)
