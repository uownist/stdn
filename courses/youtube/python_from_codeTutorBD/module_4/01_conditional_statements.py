# if, elif, and else

temperature = 10

if temperature > 30:
    print("it is a hot day")

elif temperature > 20:
    print("it is a warm day")

else:
    print("it is a cold day")


# another example
age = 18
has_nid = True

if age >= 18 and has_nid:
    print("you can vote")
else:
    print("you cannot vote")


# nested condition
my_age = 20
has_ticket = False

if my_age >= 18:
    if has_ticket:
        print("u can watch the movie")
    else:
        print("u cannot watch the movie")
else:
    print("u are too younger")
