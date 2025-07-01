# -*- coding: utf-8 -*-
import os

print([x * x for x in range(1, 11)])
print([x * x for x in range(1, 11) if x % 2 == 0])
print([m + n for m in 'ABC' for n in 'XYZ'])

print([d for d in os.listdir('.')])

d = {'x': 'A', 'y': 'V', 'z': 'C'}
print([k + '=' + v for k, v in d.items()])

L = ['Hello', 'World', 'IBM', 'Apple']
print([s.lower() for s in L])

print([x if x % 2 == 0 else -x for x in range(1, 11)])

L1 = ['Hello', 'World', 18, 'Apple', None]

print([x for x in L1 if isinstance(x, str)])