from hypchat import HypChat
from os.path import expanduser
import datetime

api_file = expanduser("~/.hypchat")

with open(api_file, 'r') as f:
    api_key = f.read(40)
    print(api_key)
    hc = HypChat(api_key)
    room = hc.get_room("BotTest")

    history = list(room.history().contents())

    for data in history:
        print(data["message"])
