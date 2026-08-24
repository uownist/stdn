# ================
# dighat somikoron nirnoy
# ====================
import math

a = float(input("enter a value: "))
b = float(input("enter b value: "))
c = float(input("enter c value: "))

d = (b**2) - (4 * a * c)

if d > 0:
    x1 = (-b + math.sqrt(d)) / (2 * a)
    x2 = (-b - math.sqrt(d)) / (2 * a)
    print(f"mul duiti bastob o osoman: {x1} and {x2}")
elif d == 0:
    x = -b / (2 * a)
    print(f"mul duiti soman: {x}")
else:
    print("roots are imaginary")
