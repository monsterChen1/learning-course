# -*- coding: utf-8 -*-
def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)


person('Michael', 30)
person('Bob', 35, city='Beijing')
person('Adam', 45, gender='M', job='Engineer')
person('Jack', 24, **{'city': 'Beijing', 'job': 'Engineer'})


def person2(name, age, *, city, job):
    print(name, age, city, job)


person('Jack', 24, city='Beijing', job='Engineer')


def person3(name, age, *args, city, job):
    print(name, age, args, city, job)


def person(name, age, *, city='Beijing', job):
    print(name, age, city, job)

