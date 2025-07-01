# -*- coding: utf-8 -*-
s = set([1, 2, 3])
# s = {1, 2, 3}
print(s)

s = set([1, 1, 2, 2, 3, 3])
print(s)

s.add(4)
print(s)
s.add(4)
print(s)

s.remove(4)
print(s)

s1 = set([1, 2, 3])
s2 = set([2, 3, 4])
print(s1 & s2)
print(s1 | s2)

s = set([1, 2, (3, 4)])
print(s)
s.remove((3, 4))
print(s)

s = set([1, 2, (3, 4, [5, 6])])
print(s)