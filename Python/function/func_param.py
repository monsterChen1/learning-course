# -*- coding: utf-8 -*-
def power(x):
    return x * x


def power2(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s


def power3(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s


def enroll(name, gender, age=6, city='Beijing'):
    print('name:', name)
    print('gender:', gender)
    print('age:', age)
    print('city:', city)
    return


print(enroll('Bob', 'M', 7))
print(enroll('Adam', 'M', city='Tianjin'))
