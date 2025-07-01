# -*- coding: utf-8 -*-

names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)

sum_num = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    sum_num = sum_num + x
print(sum_num)

print(list(range(5)))

sum_num = 0
for x in list(range(101)):
    sum_num = sum_num + x
print(sum_num)

sum_num = 0
n = 99
while n > 0:
    sum_num = sum_num + n
    n = n - 2
print(sum_num)

L = ['Bart', 'Lisa', 'Adam']
for name in L:
    print("Hello, %s!" % name)
    # print("Hello, {0}!".format(name))
    # print(f"Hello, {name}!")
