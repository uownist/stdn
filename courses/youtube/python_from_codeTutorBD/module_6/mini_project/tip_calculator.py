# bill amount: 100
# tip percentage: 15
# tipcaluclate: (100 * 15) / 100 = 15%
# total amount: 100 + 15 = 115


def get_bill_amount():
    return float(input("Enter the bill amount: $"))


def get_tip_percentage():
    return float(input("Enter tip percentage (e.g. 10 for 10%): "))


def calculate_tip(bill, tip_percent):
    return (bill * tip_percent) / 100


def calculate_total(bill, tip):
    return bill + tip


def display_results(tip, totalAmount):
    print(f"\nTip: ${tip:.2f}")
    print(f"Total Bill: ${totalAmount:.2f}")


# main program
bill = get_bill_amount()
tip_percent = get_tip_percentage()
tip = calculate_tip(bill, tip_percent)
totalAmount = calculate_total(bill, tip)
display_results(tip, totalAmount)
