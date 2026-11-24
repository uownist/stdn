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

print("\n")

# ======================
# HOMEWORK
# ======================

# 01 --------
ma_fav_games = ["rdr2", "gta vi", "eFootball", "fc26", "cod mw4"]
# print the list before making any changes
print(ma_fav_games)

# 2: replace the first item in the list with a new value
ma_fav_games[0] = "god of ware"
print(ma_fav_games)

# 3: add two new items to the end of the list using append()
ma_fav_games.append("gta 5")
ma_fav_games.append("red dead redimption ii")
print(ma_fav_games)

# 4: insert a new itme at the beginning or middle of the list
ma_fav_games.insert(2, "ghost of tsushima")
print(ma_fav_games)

# 5: remove an item using del and print the updated list
del ma_fav_games[6]
print(ma_fav_games)

# 6: use pop() to remove the last item from the list
not_supported_ma_system = ma_fav_games.pop()
print(ma_fav_games)
print(not_supported_ma_system)

# 7: use pop(index) to remove an item from a specific position. again, store the removed value in a variable and print both the list and the removed value
removed_value = ma_fav_games.pop(4)
print(ma_fav_games)
print(removed_value)

# 8: add a duplicate value to the list and then remove one occurence of it using remove(). print the first list
ma_fav_games.append("gta vi")
print(ma_fav_games)

ma_fav_games.remove("gta vi")
print(ma_fav_games)

print("\n")

# 9: challenge
pc_compponent = ["motherboard", "proccesor", "ram", "ssd", "gpu"]
pc_compponent.append("power supply")
pc_compponent.insert(2, "casing")
del pc_compponent[6]
pc_compponent.pop()
pc_compponent.remove("ssd")

print(pc_compponent)
