# ----- string methods -----
message = "hey how is it going?"

print(message.upper())  # upper
print(message.lower())  # make it lowercase
print(message.capitalize())  # make it capitalize

print(message.replace("hey", "kire"))  # kire how is it going?

print("\n")

text = "     hello python"
print(text.strip())
print(message.startswith("h"))  # True
print(message.endswith("."))  # False

msg = "Hi Python, I love Python"
print(msg.count("Python"))

print("\n")


# ----- string formatting -----
name = "Shahed"
age = 17

print(f"My name is {name} and I'm {age} yrs old.")


print("\n")


# ----- indexing and slicing -----
word = "Python"
print(word.index("ython"))
print(word[2])
print(word[-1])
print(word[-3])

# slicing
print(word[1:5])
print(word[:2])
print(word[:2].lower())
print(word[2:])


print("\n")


# ----- substring -----
email = "abc@example.com"
print("@" in email)
print("gmail" in email)
print("example" in email)
print(email.endswith(".com"))
