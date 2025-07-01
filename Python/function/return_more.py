# -*- coding: utf-8 -*-
import math


def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny


x, y = move(100, 100, 60, math.pi / 6)
print(x, y)

r = move(100, 100, 60, math.pi / 6)
print(r)


def quadratic(a, b, c):
    dis = b ** 2 - 4 * a * c
    if dis > 0:
        root1 = (-b + math.sqrt(dis)) / (2 * a)
        root2 = (-b - math.sqrt(dis)) / (2 * a)
        return root1, root2
    elif dis == 0:
        root = -b / (2 * a)
        return root
    else:
        return "无实数根"


r = quadratic(1, 3, -4)
print(r)
