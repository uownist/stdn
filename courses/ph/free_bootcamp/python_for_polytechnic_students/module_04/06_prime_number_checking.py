num = int(input("Enter your number to check its prime or not (eg. 13): "))
flag = 0

for i in range(2, num):
    if num % i == 0:
        print(f"nah.. {num} is not a prime number bruh")
        flag = 1
        break

if flag == 0:
    print(f"yah.. {num} is a prime number")
