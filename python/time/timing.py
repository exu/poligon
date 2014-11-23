from timeit import Timer

t = Timer('print("a")')

r = t.repeat()

print(r)
