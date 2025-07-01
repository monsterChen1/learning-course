from init import Init

if __name__ == "__main__":
    # 初始化

    try:
        con = Init()
        # 打开浏览器
        con.enter_concert()
        # 开始抢票
        con.choose_ticket()
    except Exception as e:
        print(e)
        con.finish()
