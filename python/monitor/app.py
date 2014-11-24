# -*- coding: utf-8 -*-
from concurrent.futures import ThreadPoolExecutor
from time import sleep
from random import randint
import urllib.request
import urllib.error
import subprocess

def make_request(url):
    try:
        response = urllib.request.urlopen(url)
        code = response.code
    except urllib.error.HTTPError as e:
        code = e.getcode()
    except ConnectionError as e:
        code = -1
    except urllib.error.URLError as e:
        code = -2

    return {
        "code": code,
        "url": url
    }

def notify_send(message):
    cmd = "DISPLAY=:0.0 /usr/bin/notify-send -u critical 'Error!'  '%s'"
    subprocess.call(cmd % message, shell = True)

urls = [
    "http://kasia/przepis/643",
    "http://kt/przepis/643",
    "http://localhost:8008",
    "http://kasia/przepis/643",
    "http://kt/przepis/643",
    "http://localhost:8008",
    "http://kasia/przepis/643",
    "http://kt/przepis/643",
    "http://localhost:8008",
    "http://kasia/przepis/643",
    "http://kt/przepis/643",
    "http://localhost:8008/asdsada",
    "http://kasia/przepis/643",
    "http://kt/przepis/23643",
    "http://localhost:8008/dsahdhsa",
    "http://localhost/aaaa"
]

pattern = "http://kasia/przepis/%s"
for i in range(1, 100):
    urls.append(pattern % i)

with ThreadPoolExecutor(max_workers=4) as executor:
    futures = []
    for url in urls:
        print("calling url: " + url)
        futures.append(executor.submit(make_request, url))

    for f in futures:
        result = f.result()
        print(f, result)
        if result["code"] != 200:
            notify_send("there is %s with %s " % (str(result["code"]), result["url"]))
