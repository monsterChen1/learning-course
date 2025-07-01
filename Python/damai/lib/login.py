# -*- coding: utf-8 -*-
from selenium import webdriver

class Login(object):
    def check_login_status:
        # 创建一个浏览器实例
        driver = webdriver.Chrome()

        url = "https://www.damai.cn/"
        driver.get(url)

        #判断登录状态的条件