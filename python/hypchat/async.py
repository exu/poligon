import asyncio
import datetime


from hypchat import HypChat
from os.path import expanduser
import datetime


def get_api_key():
    return open(api_file, 'r').read(40)


api_file = expanduser("~/.hypchat")
hc = HypChat(get_api_key())
room = hc.get_room("BotTest")
analyzed = []

def get_history():
    return list(room.history().contents())

def analyze(items):

    print(items)
    for item in items:
        analyzed.append(item["id"])
        mess = room.message("@response '" + item['message'] + "; looks weak!")
        print(mess)

    # print(analyzed)

def watch(loop):
    history = get_history()
    new = [i for i in history if i['id'] not in analyzed and i['message'].find("@bot") >= 0 and not i['message'].find("@response") >= 0]

    if new:
        analyze(new)
    else:
        print("now new items")
    loop.call_later(1, watch, loop)


loop = asyncio.get_event_loop()
loop.call_soon(watch, loop)
loop.run_forever()
loop.close()
