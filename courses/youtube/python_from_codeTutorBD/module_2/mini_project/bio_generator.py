# Build a Simple BIO Generator using user input and print

name = input("What is your name: ")
age = input("How old are you: ")
city = input("Which city do you live in: ")
fact = input("Plz share a fun fact about yourself: ")

print("\n----- Your BIO -----")  # make a new line

# old approach --------------------
# print("Hey, this is " + name + "!")
# print("I am " + age + " years old and I live in " + city + ".")
# print("Fun fact about me: " + fact + ".")


# for better and smart approach using "f" string like js ---------------------------------
print(f"Hey, this is {name}, I'm {age} years old & I live in {city}.")
print(f"Fun fact about me: {fact}.")
