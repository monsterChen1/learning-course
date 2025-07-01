# -*- coding: utf-8 -*-
# 引入 tornado ioloop和web模块
import tornado.ioloop
import tornado.web


# 定义一个Handler并继承Tornado Web RequestHandel
class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, Tornado!")


# 创建Tornado Web Application对象
def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])


if __name__ == "__main__":
    app = make_app()
    # 监听端口
    app.listen(9999)
    # 启动Web服务器
    tornado.ioloop.IOLoop.current().start()