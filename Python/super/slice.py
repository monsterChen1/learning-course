# -*- coding: utf-8 -*-
L = ['Michael', 'Sarach', 'Tracy', 'Bob', 'Jack']
print(L[0:3])
print(L[:4])
print(L[1:3])

T = (1, 2, 3, 4, 5)
print(T[:3])
print(T[-2:])
print(T[:])

S = 'ABCDEF'
print(S[:5])


def trim(s):
    length = len(s)
    if s[:1] == ' ':
        s = s[1:length]
    elif s[-1:] == ' ':
        s = s[:-1]
    else:
        return s
    return trim(s)


print(trim(' Hello'))
print(trim('  Hello'))
print(trim('Hello '))
print(trim('Hello  '))
print(trim('  Hello  '))
