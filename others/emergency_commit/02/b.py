# ===================
# বিষমবাহু ত্রিভুজের ক্ষেত্রফল নির্ণয়
# ==================
import math


def traiangle_area(a, b, c):
    s = (a + b + c) / 2
    area = math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area


a = float(input("enter value of a: "))
b = float(input("enter value of b: "))
c = float(input("enter value of c: "))

print(f"triangle area: {traiangle_area(a, b, c)}")
