# -*- coding: utf-8 -*-
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
print(d['Michael'])

d['Adam'] = 67
print(d['Adam'])

print('Thomas' in d)
print(d.get('Thomas'))
print(d.get('Thomas', -1))

d.pop('Bob')
print(d)

d = {'tuple': (1, 2, 3)}
print(d)

d = {(1, 2, 3): 1}
print(d)

d = {(1, [2, 3]): 2}
print(d)
