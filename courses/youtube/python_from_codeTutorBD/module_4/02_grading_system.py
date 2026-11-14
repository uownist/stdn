marks = int(input("Enter your marks (0 - 100): "))

# validation
if marks < 0 or marks > 100:
    print("Invalid marks! plz enter a value between 0 to 100.")
    exit()
if marks >= 90:
    print("Grade: A+")
elif marks >= 80:
    print("Grade: A")
elif marks >= 70:
    print("Grade: B")
elif marks >= 60:
    print("Grade: C")
elif marks >= 50:
    print("Grade: D")
else:
    print("Grade: F - Better lucky next time!")
