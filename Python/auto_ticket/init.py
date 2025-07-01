# -*- coding: utf-8 -*-
import pickle
import time
import os
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from setting import DAMAI_URL, LOGIN_URL, TARGET_URL


class Init:
    def __init__(self):
        # 当前状态
        self.status = 0
        # 0: 模拟登录 1: Cookies登录
        self.login_method = 1
        # 加载Chrome浏览器
        options = webdriver.ChromeOptions()
        service = Service(executable_path="driver/chromedriver/chromedriver")
        self.driver = webdriver.Chrome(service=service, options=options)

    def set_cookie(self):
        self.driver.get(DAMAI_URL)
        username = self.driver.find_element(By.CLASS_NAME, "name-user").text
        if not username:
            print("###等待跳转登录###")
            # 点击跳转登录页
            self.driver.find_element(By.CLASS_NAME, 'span-user').click()

            while self.driver.title == "大麦登录":
                sleep(1)
                print("###请扫码登录(推荐使用第三方绑定登录)###")

            while self.driver.title.find("大麦网"):
                username = self.driver.find_element(By.CLASS_NAME, "name-user").text
                if username:
                    sleep(1)
                    print("###登录成功")
                    pickle.dump(self.driver.get_cookies(),
                                open("/Users/monster/www/learning-python/auto_ticket/cookies.pkl", "wb"))
                    print('###Cookie保存成功###')
                    self.driver.get(TARGET_URL)
                    break

    def get_cookie(self):
        try:
            cookies = pickle.load(open("cookies.pkl", "rb"))
            for cookie in cookies:
                cookie_dict = {
                    'domain': '.daimai.cn',
                    'name': cookie.get('name'),
                    'value': cookie.get('value'),
                }
                self.driver.add_cookie(cookie_dict)
                print('###载入Cookie###')
        except Exception as e:
            print(e)

    def login(self):
        if self.login_method == 0:
            self.driver.get(LOGIN_URL)
        elif self.login_method == 1:
            if not os.path.exists('cookies.pkl'):
                self.set_cookie()
            else:
                self.driver.get(TARGET_URL)
                self.get_cookie()

    def enter_concert(self):
        """打开浏览器"""
        print('###打开浏览器，进入大麦网###')
        self.driver.maximize_window()
        self.login()
        self.driver.refresh()
        self.status = 2
        print("###登录成功###")
        # 直接跳转购票页
        sleep(1)
        self.driver.get(TARGET_URL)
        # if self.isElementExist('/html/body/div[2]/div[2]/div/div/div[3]/div[2]'):
        #     self.driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/div/div/div[3]/div[2]').click()

    def isElementExist(self, element):
        flag = True
        browser = self.driver
        try:
            browser.find_element(By.XPATH, element)
            return flag
        except Exception as e:
            flag = False
            return flag

    def choose_ticket(self):
        if self.status == 2:
            print("=" * 30)
            print("###开始进行日期及票价选择###")
            while self.driver.title.find('确认订单') == -1:
                try:
                    buybutton = self.driver.find_element(By.CLASS_NAME, 'buybtn').text
                    if buybutton == "提交缺货登记":
                        self.status = 2
                        self.driver.get(TARGET_URL)
                        print('###抢票未开始，刷新等待开始###')
                        continue
                    elif buybutton == "立即预定":
                        self.driver.find_element(By.CLASS_NAME, 'buybtn').click()
                        # 改变现有状态
                        self.status = 3
                    elif buybutton == "立即购买":
                        self.driver.find_element(By.CLASS_NAME, 'buybtn').click()
                        # 改变现有状态
                        self.status = 4
                except Exception as e:
                    print('未添加购票页面')
                    print(e)

                title = self.driver.title
                if title == '确认订单':
                    while True:
                        # 如果标题为确认订单
                        print('waiting ......')
                        if self.isElementExist('//*[@id="container"]/div/div[9]/button'):
                            self.check_order()
                            break

    def choice_seats(self):
        while self.driver.title == '选座购买':
            while self.isElementExist('//*[@id="app"]/div[2]/div[2]/div[1]/div[2]/img'):
                # 座位手动选择 选中座位之后//*[@id="app"]/div[2]/div[2]/div[1]/div[2]/img 就会消失
                print('请快速的选择您的座位！！！')
                # 消失之后就会出现 //*[@id="app"]/div[2]/div[2]/div[2]/div
                while self.isElementExist('//*[@id="app"]/div[2]/div[2]/div[2]/div'):
                    # 找到之后进行点击确认选座
                    self.driver.find_element(By.XPATH, '//*[@id="app"]/div[2]/div[2]/div[2]/button').click()

    def check_order(self):
        if self.status in [3, 4 , 5]:
            print("###开始确认订单###")
            try:
                # 默认选第一个购票人信息
                self.driver.find_element(By.XPATH, '//*[@id="container"]/div/div[2]/div[2]/div[1]/div/label').click()
            except Exception as e:
                print("###购票人信息选中失败，自行查看元素位置###")
                print(e)
            # 最后一步提交订单
            time.sleep(0.5)
            # 太快会影响加载，导致按钮点击无效
            self.driver.find_element(By.XPATH, '//div[@class = "w1200"]//div[2]//div//div[9]//button[1]').click()

    def finish(self):
        self.driver.quit()