# ---------- function structure ----------
# def function_name():
#     # body


# def say_hello():
#     print("hlw ownist!")


# say_hello()
# say_hello()


# parameter
# def say_hello(name, age):
#     print(f"Hey, I'm {name}!. RN I'm {age} yrs old.")


# say_hello("ownist", 17)
# say_hello("rashel", 23)


# return value
# def add_number(a, b):
#     return a + b


# sum = add_number(5, 2)
# print(sum)

# sum2 = add_number(4, 2)
# print(sum2)


# scope (local vs global)
name = "shahed"  # this is global variable


def say_hlw():  # function ekta block scope
    name = "ownist"  # this is block scope
    print(
        f"inside fnc {name}"
    )  # eita ownist print korbe bcz block scope e priority beshi


say_hlw()
print(name)  # shahed
print(len("ownist"))  # built in func / method
