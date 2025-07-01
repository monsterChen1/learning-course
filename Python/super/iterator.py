# -*- coding: utf-8 -*-
from collections.abc import Iterable, Iterator

print('-------Iterable-------')
print(isinstance([], Iterable))
print(isinstance({}, Iterable))
print(isinstance((1,), Iterable))
print(isinstance('abc', Iterable))
print(isinstance((x for x in range(10)), Iterable))
print(isinstance(100, Iterable))

print('-------Iterator-------')
print(isinstance((x for x in range(10)), Iterator))
print(isinstance([], Iterator))
print(isinstance({}, Iterator))
print(isinstance((1, ), Iterator))
print(isinstance('abc', Iterator))
print(isinstance(iter([]), Iterator))
print(isinstance(iter({}), Iterator))
