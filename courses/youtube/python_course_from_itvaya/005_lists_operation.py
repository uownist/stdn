bikes = ["honda", "apache", "hero", "suzuki"]

print(bikes)

# change list name using index number
bikes[0] = "yamah"
print(bikes)

# add item on list
bikes.append("ducati")
print(bikes)

bikes.append("kawasaki")
print(bikes)

# add item based on index
bikes.insert(2, "honda")
print(bikes)

# remove an item from list

# --> remember: del key onek powerful. eita ekbar use korle jekono kichu ekebare delete hoye zabe. so eita use korar smy sabdhan thakte hbe :)
del bikes[5]
print(bikes)

# using pop()
bikes.pop()
print(bikes)

pop_value = bikes.pop(0)
print(pop_value)

print(bikes)

# zodi ami kono value er index na jani tahole remove() use korbo and remove() seitake remove kore dibe. but remove method remove kora itemtake return korbe nah, sudhumatro pop method korbe
bikes.remove("hero")
print(bikes)

# experiment
languages = ["javascript", "python", "rust", "c++", "javascript"]
print(languages)

languages.remove("javascript")
print(languages)
