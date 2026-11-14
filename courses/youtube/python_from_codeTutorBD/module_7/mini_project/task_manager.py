todo_list = []


def show_task():
    print("\nTo-Do List Manager")
    print("1. View Tasks")
    print("2. Add Task")
    print("3. Remove Task")
    print("4. Exit")


def view_task():
    if not todo_list:
        print("No task yet!")
    else:
        print("\nYour Tasks:")
        for i, task in enumerate(todo_list, 1):
            print(f"{i}. {task}")


def add_task():
    task = input("Enter a new task: ")
    todo_list.append(task)
    print(f'"{task}" added!')


def remove_task():
    view_task()

    try:
        task_number = int(input("Enter the number of the task to remove: "))
        removed_task = todo_list.pop(task_number - 1)
        print(f'"{removed_task} was removed!"')
    except (IndexError, ValueError):
        print("Invalid task number! Try Again.")


while True:
    show_task()
    choose = input("\nChoose an option: ")

    if choose == "1":
        view_task()
    elif choose == "2":
        add_task()
    elif choose == "3":
        remove_task()
    elif choose == "4":
        print("okai, cya and tc")
        break
    else:
        print("Invalid Choice. Try Again!")
