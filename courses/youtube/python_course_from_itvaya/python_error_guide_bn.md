## Python Error Guide

এই নোটে Python-এর সাধারণ Error, সেগুলো কেন হয়, কীভাবে ঠিক করতে হয় এবং
কীভাবে Error Handle করতে হয় ধাপে ধাপে দেখানো হয়েছে।

#

## ১. Error কী?

Python-এ কোড চালানোর সময় কোনো সমস্যা হলে Python সাধারণত একটি Error
Message দেখায়। এই Message থেকে বোঝা যায় কী সমস্যা হয়েছে এবং কোথায় হয়েছে।

উদাহরণ:

```python
print("Hello World"
```

এখানে শেষের `)` বন্ধ করা হয়নি। তাই Python `SyntaxError` দেখাবে।

```text
SyntaxError: '(' was never closed
```

Error Message পড়তে শেখা খুব জরুরি। শুধু Error-এর নাম মুখস্থ না করে কেন Error
হয়েছে, সেটি বোঝার চেষ্টা করতে হবে।

#

## ২. Error-এর প্রধান ধরন

শুরুতে এই তিনটি ধারণা বুঝে রাখো।

### ২.১ Syntax Error

Python-এর লেখার নিয়ম বা Syntax ভুল হলে এই সমস্যা হয়।

উদাহরণ:

```python
if 10 > 5
    print("Yes")
```

`if` লাইনের শেষে `:` নেই।

সম্ভাব্য Error:

```text
SyntaxError: expected ':'
```

সঠিক কোড:

```python
if 10 > 5:
    print("Yes")
```

### ২.২ Runtime Error বা Exception

কোডের Syntax ঠিক থাকলেও Program চলার সময় কোনো সমস্যা হতে পারে। এ ধরনের
সমস্যাকে Exception বলা হয়।

উদাহরণ:

```python
print(10 / 0)
```

কোডটি চালানোর সময় `ZeroDivisionError` হবে।

### ২.৩ Logical Error

কোড চলে, কিন্তু প্রোগ্রামারের যুক্তি বা হিসাব ভুল হওয়ায় ফলাফল ভুল আসে। Logical
Error সব সময় Python-এর Error Message তৈরি করে না।

উদাহরণ:

```python
length = 10
width = 5

area = length + width
print(area)
```

এখানে আয়তক্ষেত্রের ক্ষেত্রফল বের করতে যোগ নয়, গুণ করতে হবে। সঠিক কোড:

```python
area = length * width
print(area)
```

#

## ৩. Python-এর সাধারণ Error ও Exception

### ৩.১ SyntaxError

**কখন হয়:** Python-এর Syntax ভুল হলে।

উদাহরণ:

```python
print("Hello"
```

কারণ: শেষের Parenthesis `)` বন্ধ করা হয়নি।

সঠিক কোড:

```python
print("Hello")
```

আরেকটি উদাহরণ:

```python
if 10 > 5
    print("Yes")
```

কারণ: `if` লাইনের শেষে Colon `:` নেই।

### ৩.২ IndentationError

**কখন হয়:** Code Block-এর Indentation বা শুরুর Space ঠিক না থাকলে।

উদাহরণ:

```python
if 10 > 5:
print("Yes")
```

সম্ভাব্য Error:

```text
IndentationError: expected an indented block
```

সঠিক কোড:

```python
if 10 > 5:
    print("Yes")
```

মনে রাখবে: Python-এ সাধারণত Code Block-এর ভেতরে চারটি Space ব্যবহার করা
হয়। একই Block-এ Indentation একভাবে রাখতে হবে।

### ৩.৩ NameError

**কখন হয়:** যে Variable বা Name ব্যবহার করা হয়েছে, সেটি Python খুঁজে না
পেলে।

উদাহরণ:

```python
name = "Shahed"

print(username)
```

Error:

```text
NameError: name 'username' is not defined
```

কারণ: `name` Variable তৈরি করা হয়েছে, কিন্তু `username` তৈরি করা হয়নি।

সঠিক কোড:

```python
name = "Shahed"

print(name)
```

JavaScript-এ কাছাকাছি ধরনের সমস্যায় `ReferenceError` দেখা যায়।

### ৩.৪ TypeError

**কখন হয়:** কোনো Operation-এর জন্য অসামঞ্জস্যপূর্ণ Data Type ব্যবহার করলে।

উদাহরণ:

```python
age = 20
name = "Shahed"

print(age + name)
```

Error-এর ধরন:

```text
TypeError
```

কারণ: Python-এ Integer-এর সঙ্গে String সরাসরি যোগ করা যায় না।

সঠিক কোড:

```python
age = 20
name = "Shahed"

print(name + str(age))
```

JavaScript-এর সঙ্গে পার্থক্য:

```javascript
console.log(20 + "Shahed");
```

JavaScript এখানে String তৈরি করে ফলাফল দিতে পারে। Python-এ এ ক্ষেত্রে
`str()` দিয়ে Type Conversion করতে হয়।

### ৩.৫ ValueError

**কখন হয়:** Data Type গ্রহণযোগ্য হলেও দেওয়া Value উপযুক্ত না হলে।

উদাহরণ:

```python
number = int("hello")
```

Error:

```text
ValueError
```

কারণ: `"hello"`-কে Integer-এ রূপান্তর করা যায় না।

সঠিক উদাহরণ:

```python
number = int("100")
print(number)
```

Output:

```text
100
```

### ৩.৬ IndexError

**কখন হয়:** List, Tuple বা String-এর এমন Index ব্যবহার করলে, যেটি নেই।

উদাহরণ:

```python
fruits = ["Apple", "Mango", "Banana"]

print(fruits[5])
```

Error:

```text
IndexError: list index out of range
```

কারণ: এখানে Index হলো `0`, `1` এবং `2`। কিন্তু কোডে `5` নম্বর Index চাওয়া
হয়েছে।

সঠিক কোড:

```python
print(fruits[2])
```

### ৩.৭ KeyError

**কখন হয়:** Dictionary-তে নেই এমন Key দিয়ে Value খুঁজলে।

উদাহরণ:

```python
user = {
    "name": "Shahed",
    "age": 20
}

print(user["email"])
```

Error:

```text
KeyError: 'email'
```

কারণ: Dictionary-তে `email` নামে কোনো Key নেই।

Key আছে কি না যাচাই করতে:

```python
if "email" in user:
    print(user["email"])
else:
    print("Email key not found")
```

### ৩.৮ AttributeError

**কখন হয়:** কোনো Object-এর মধ্যে নেই এমন Attribute বা Method ব্যবহার করলে।

উদাহরণ:

```python
name = "Shahed"

name.append("Developer")
```

Error:

```text
AttributeError
```

কারণ: String-এর মধ্যে `append()` Method নেই। `append()` List-এর Method।

সঠিক উদাহরণ:

```python
names = ["Shahed"]

names.append("Developer")

print(names)
```

### ৩.৯ ZeroDivisionError

**কখন হয়:** কোনো সংখ্যাকে Zero দিয়ে ভাগ করার চেষ্টা করলে।

উদাহরণ:

```python
a = 10
b = 0

print(a / b)
```

Error:

```text
ZeroDivisionError: division by zero
```

সমাধান:

```python
a = 10
b = 0

if b != 0:
    print(a / b)
else:
    print("Cannot divide by zero")
```

### ৩.১০ ModuleNotFoundError

**কখন হয়:** Import করতে চাওয়া Module Python খুঁজে না পেলে।

উদাহরণ:

```python
import mymodule
```

যদি `mymodule` পাওয়া না যায়, তাহলে Error হবে:

```text
ModuleNotFoundError: No module named 'mymodule'
```

সম্ভাব্য কারণ:

- Module ইনস্টল করা নেই।
- Module-এর নাম ভুল লেখা হয়েছে।
- Python যে Location-এ Module খুঁজছে, সেখানে Module নেই।

### ৩.১১ ImportError

**কখন হয়:** Module পাওয়া গেলেও তার মধ্যে যে নির্দিষ্ট Name বা Function
Import করতে চাও, সেটি না থাকলে।

উদাহরণ:

```python
from math import hello
```

Error:

```text
ImportError: cannot import name 'hello' from 'math'
```

কারণ: `math` Module-এ `hello` নামে কোনো Name নেই।

### ৩.১২ FileNotFoundError

**কখন হয়:** যে File Open করতে চাও, সেটি নির্দিষ্ট Location-এ না থাকলে।

উদাহরণ:

```python
file = open("data.txt", "r")
```

যদি `data.txt` File না থাকে, তাহলে Error হবে:

```text
FileNotFoundError
```

সম্ভাব্য কারণ:

- File-এর নাম ভুল।
- File-এর Path ভুল।
- নির্দিষ্ট Location-এ File নেই।

### ৩.১৩ RecursionError

**কখন হয়:** কোনো Function নিজেকে বারবার Call করতে থাকলে এবং Python-এর
Recursion Limit অতিক্রম করলে।

উদাহরণ:

```python
def hello():
    hello()

hello()
```

Error:

```text
RecursionError: maximum recursion depth exceeded
```

কারণ: Function নিজেকেই Call করছে, কিন্তু থামার কোনো শর্ত নেই।

সাধারণত Recursive Function-এ Base Case বা থামার শর্ত দিতে হয়।

### ৩.১৪ OverflowError

**কখন হয়:** কোনো Numeric Operation-এর ফলাফল নির্দিষ্ট Operation-এর
গ্রহণযোগ্য সীমার বাইরে চলে গেলে।

উদাহরণ:

```python
import math

print(math.exp(1000))
```

সাধারণত এখানে `OverflowError` হতে পারে।

কারণ: `math.exp(1000)`-এর ফলাফল Float-এর সীমার বাইরে চলে যায়।

### ৩.১৫ RuntimeError

**কখন হয়:** Program চলার সময় এমন কোনো সমস্যা হলে, যার জন্য আরও নির্দিষ্ট
Exception ব্যবহার করা হয়নি।

উদাহরণ:

```python
def change():
    raise RuntimeError("Something went wrong")

change()
```

Error:

```text
RuntimeError: Something went wrong
```

এখানে `raise` ব্যবহার করে নিজে থেকে Exception তৈরি করা হয়েছে।

#

## ৪. আরও কিছু গুরুত্বপূর্ণ Exception

Exception কখন হয়

#

`AssertionError` `assert`-এর শর্ত False হলে
`OSError` Operating System-সম্পর্কিত Operation ব্যর্থ হলে
`PermissionError` কোনো File বা Resource ব্যবহারের অনুমতি না থাকলে
`TimeoutError` নির্দিষ্ট সময়ের মধ্যে Operation শেষ না হলে
`NotImplementedError` কোনো Method এখনো Implement করা না হলে
`StopIteration` Iterator-এর পরবর্তী Item আর না থাকলে
`KeyboardInterrupt` Keyboard থেকে Program বন্ধ করার Interrupt এলে
`EOFError` Input-এর প্রত্যাশিত শেষের আগে EOF পাওয়া গেলে
`MemoryError` পর্যাপ্ত Memory না থাকলে
`FloatingPointError` নির্দিষ্ট Floating-point Operation ব্যর্থ হলে

এই তালিকার সব Exception এখনই মুখস্থ করার দরকার নেই। প্রয়োজন অনুযায়ী এগুলো
শিখবে।

#

## ৫. Python-এ Exception Handling

Error হলেই যে Program বন্ধ হয়ে যেতে হবে, এমন নয়। Python-এ `try`,
`except`, `else` এবং `finally` ব্যবহার করে Exception Handle করা যায়।

উদাহরণ:

```python
try:
    number = int(input("Enter a number: "))
    print(100 / number)

except ValueError:
    print("Please enter a valid number")

except ZeroDivisionError:
    print("Cannot divide by zero")

else:
    print("Operation successful")

finally:
    print("Program finished")
```

### ৫.১ try

যে Code-এ Exception হতে পারে, সেটি `try` Block-এর মধ্যে রাখা হয়।

```python
try:
    number = int(input("Enter a number: "))
```

### ৫.২ except

`try` Block-এ নির্দিষ্ট Exception হলে `except` Block চলে।

```python
except ValueError:
    print("Please enter a valid number")
```

একাধিক ধরনের Exception আলাদাভাবে Handle করা যায়।

```python
except ValueError:
    print("Invalid number")

except ZeroDivisionError:
    print("Cannot divide by zero")
```

### ৫.৩ else

`try` Block-এ কোনো Exception না হলে `else` Block চলে।

```python
try:
    number = int(input("Enter a number: "))

except ValueError:
    print("Invalid input")

else:
    print("Input successful")
```

### ৫.৪ finally

Exception হোক বা না হোক, `finally` Block সাধারণত চলবে।

```python
try:
    print("Hello")

finally:
    print("Program finished")
```

File বা অন্য Resource ব্যবহারের পর Cleanup করার মতো কাজে `finally` উপকারী।

#

## ৬. raise ব্যবহার করে Exception তৈরি করা

Python-এ `raise` ব্যবহার করে নিজে থেকে Exception তৈরি করা যায়।

উদাহরণ:

```python
age = 15

if age < 18:
    raise ValueError("Age must be 18 or above")
```

এখানে `age` 18-এর কম হওয়ায় Python `ValueError` তৈরি করবে।

#

## ৭. Python ও JavaScript-এর Error Handling তুলনা

Python JavaScript

#

`try` `try`
`except` `catch`
`else` সরাসরি সমতুল্য নেই
`finally` `finally`
`raise` `throw`
`NameError` কাছাকাছি সমস্যা: `ReferenceError`
`TypeError` `TypeError`
`SyntaxError` `SyntaxError`
`ValueError` সরাসরি একই নামে Built-in সমতুল্য নেই

JavaScript উদাহরণ:

```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log(error);
} finally {
  console.log("Program finished");
}
```

Python উদাহরণ:

```python
try:
    result = 10 / 0
    print(result)

except ZeroDivisionError as error:
    print(error)

finally:
    print("Program finished")
```

মনে রাখবে: JavaScript এবং Python-এর Error Handling-এর গঠন কিছুটা একই হলেও
সব Error-এর আচরণ এক নয়।

#

## ৮. কোন Error আগে শিখবে?

এই ক্রমে শিখলে সুবিধা হবে।

### Beginner

1.  `SyntaxError`
2.  `IndentationError`
3.  `NameError`
4.  `TypeError`
5.  `ValueError`

### Basic Intermediate

1.  `IndexError`
2.  `KeyError`
3.  `AttributeError`
4.  `ZeroDivisionError`

### Intermediate

1.  `ImportError`
2.  `ModuleNotFoundError`
3.  `FileNotFoundError`
4.  `OSError`

### Advanced

1.  `RecursionError`
2.  `OverflowError`
3.  `MemoryError`
4.  Custom Exceptions

### Exception Handling

1.  `try`
2.  `except`
3.  `else`
4.  `finally`
5.  `raise`
