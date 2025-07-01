# -*- coding: utf-8 -*-
import asyncio
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("<h1>Hello, world!</h1>")


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler)
    ])


async def main():
    app = make_app()
    app.listen(8888)
    await asyncio.Event().wait()


if __name__ == "__main__":
    asyncio.run(main())
