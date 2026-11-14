# introduce dictionary
student = {"name": "Shahed", "age": 17, "occupation": "student"}
print(student)


# ---------- get the value ----------
print(student["name"])
print(student["age"])

print(student.get("name"))
print(student.get("occupation"))

# key na thakle err dibe nh.. none dibe. which mean's program crash korbe nah
print(student.get("major"))


# ---- modify and set -----
student["age"] = 20
print(student)

student["goal"] = "millionaire"
print(student)
print(student["goal"])
print(student.get("goal"))  # using `get` method


# ----- methods -----
student.pop("age")
print(student)

print(
    student.keys()
)  # get dictionaries keys: dict_keys(['name', 'occupation', 'goal'])
print(student.values())  # get dictionaries values

print(student.items())  # get key - value pairs
# dict_items([('name', 'Shahed'), ('occupation', 'student'), ('goal', 'millionaire')])

print("\n")

# ----- iterate dict -----
for key, value in student.items():
    print(f"{key.capitalize()}: {value.capitalize()}")
