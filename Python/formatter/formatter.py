#! /usr/bin/env python3
# -*- codinng: utf-8 -*-

print('%2d - %02d' % (3, 1))
print('%.2f' % 3.1415926)

print('Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125))

r = 2.5
s = 3.14 * r ** 2
print(f'The area of a circle with radius {r} is {s:.2f}')

s1 = 72
s2 = 85
r = (s2 - s1) / s1 * 100
print('%.1f%%' % r)