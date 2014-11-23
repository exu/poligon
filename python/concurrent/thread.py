from concurrent.futures import ThreadPoolExecutor
from time import sleep
from random import randint

def run(mess):
    sleep(randint(1,3))
    return "'%s', '%s'" % (mess, mess)

mess = ["aaa", "second", "third", "fourth"]

with ThreadPoolExecutor(max_workers=len(mess)) as executor:
    futures = []
    for i in mess:
        futures.append(executor.submit(run, i))

    for f in futures:
        print(f.result())
