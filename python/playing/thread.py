from concurrent.futures import ThreadPoolExecutor
from time import sleep

def run(mess):
    sleep(5)
    return "'%s', '%s'" % (mess, mess)

with ThreadPoolExecutor(max_workers=2) as executor:
    future = executor.submit(run, "aaa")
    future2 = executor.submit(run, "bbb")
    print(future.result())
    print(future2.result())
