num = int(input("Enter your number to check its prime or not (eg. 13): "))
flag = 0

for i in range(2, num):
    if num % i == 0:
        print(f"nah.. {num} is not a prime number bruh")
        flag = 1
        break

if flag == 0:
    print(f"yah.. {num} is a prime number")

print("\n")


# ===================
# using function
# ===================
number = int(input("Enter your number: "))


def checkPrime(n):
    # n jodi 1 er soman or choto hoy tahole seita prime number not
    if n <= 1:
        print(f"{n} is not a prime number")

    # create a flag variable
    is_prime = True

    # loop use kore prottekta number ke diye check kora hocche je prime number kina
    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break

    # final check and get the output
    if is_prime:
        print(f"{n} is a prime number.")


checkPrime(number)
