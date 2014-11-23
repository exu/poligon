import queue

q = queue.Queue()
for i in range(1, 100000):
    q.put({"task": "number" + str(i)})

while not q.empty():
    item = q.get()
    print(item)
