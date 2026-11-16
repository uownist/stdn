x = int(input("Enter first number: "))
y = int(input("Enter second number: "))
z = int(input("Enter third number: "))

if x >= y and x >= z:
    print(f"{x} boro")
elif y >= x and y >= z:
    print(f"{y} boro")
else:
    print(f"{z} boro")
