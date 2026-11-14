import random

secret_number = random.randint(1, 10)
guess = 0

while guess != secret_number:
    guess = int(input("Guess a number bettwen 1 to 10: 2"))

    if guess < secret_number:
        print("to low! try again")
    elif guess > secret_number:
        print("to high! try again")
    else:
        print("congo! u guess the number successfully")
