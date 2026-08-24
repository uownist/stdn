# ================
# factorial man nirnoy
# ================
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)


num = int(input("enter a integer: "))

if num < 0:
    print(f"invalid integer, try again!")
else:
    print(f"{num} er factorial number holo: {factorial(num)}")
