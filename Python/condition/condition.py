# -*- coding: utf-8 -*-

age = int(input('Please input your age:'))
# if age >= 18:
#     print('your age is', age)
#     print('adult')
# else:
#     print('your age is', age)
#     print('teenager')

if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')

height = 1.75
weiget = 80.5

bim = weiget / height ** 2

if bim <= 18.5:
    print('过轻')
elif bim <= 25:
    print('正常')
elif bim <= 28:
    print('过重')
elif bim <= 32:
    print('肥胖')
else:
    print('严重肥胖')

