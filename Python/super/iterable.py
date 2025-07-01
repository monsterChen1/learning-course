# -*- coding: utf-8 -*-
from collections.abc import Iterable


d = {'a': 1, 'b': 2, 'c': 3}
for key in d:
    print(key)

for value in d.values():
    print(value)

for k, v in d.items():
    print(k, v)

for ch in 'ABC':
    print(ch)

print(isinstance('ABC', Iterable))
print(isinstance([1, 2, 3], Iterable))
print(isinstance(123, Iterable))

for k, v in enumerate(['A', 'B', 'C']):
    print(k, v)


def findMinAndMax(L):
    max_num = max(L, default=None)
    min_num = min(L, default=None)
    return min_num, max_num


print(findMinAndMax([]))
findMinAndMax([7])
findMinAndMax([7, 1])
findMinAndMax([7, 1, 3, 9, 5])
