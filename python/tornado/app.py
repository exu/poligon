# -*- coding: utf-8 -*-

from tornado.ioloop import IOLoop
from tornado.web import RequestHandler, Application, url
from tornado.options import define, parse_command_line, options
from tornado.httpserver import HTTPServer
import tornado.autoreload
import os
import json
import datetime
import selenium


class BaseHandler(RequestHandler):
    def initialize(self):
        self.selenium = selenium.Selenium("https://fttest.ninthwave.net")


class AddHandler(BaseHandler):
    def get_payload(self, data):
        data = json.loads(data)
        if not "date" in data and not "hours" in data:
            self.write({"error": "Invalid request JSON data"})

        date = datetime.datetime.strptime(data["date"], "%Y-%m-%d")
        hours = int(data["hours"])

        return date, hours


    def put(self):
        try:
            date, hours = self.get_payload(self.request.body)

            self.selenium.insert(date, hours)

            return self.write({"message": "added date %s and time %s" % (hours, date)})

        except ValueError as ex:
            return self.write({"error": "Invalid JSON", "message": ex.message})
        # except:
        #     return self.write({"error": "WTF?"})


    def get(self):
        return self.write({"a": "b"})


def main():
    app = Application([
        url(r"/add_time", AddHandler, name="add_time"),
        ])
    server = HTTPServer(app)
    server.bind(8888)
    server.start(0)  # forks one process per cpu

    IOLoop.current().start()


if __name__ == '__main__':
    main()
