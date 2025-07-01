# -*- coding: utf-8 -*-

classmates = ('Michael', 'Bob', 'Tracy')
print(classmates)

t = (1, 2)
print(t)

t = ()
print(t)

t = (1)
print(t)

t = (1,)
print(t)

t = ('a', 'b', ['A', 'B'])
t[2][0] = 'X'
t[2][1] = 'Y'
print(t)

L = [
	['Apple', 'Google', 'Microsoft'],
	['Java', 'Python', 'Ruby', 'PHP'],
	['Adam', 'Bar', 'Lisa'],
]
print(L[0][0]);
print(L[1][1]);
print(L[-1][-1]);