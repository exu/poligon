import datetime as d

past = d.datetime(2013, 12, 26)
now = d.datetime.today()

diff = now - past
print(type(diff))
print("There id ", diff, " after last christmass")


delta = d.timedelta(0,0,1)
print("Tommorow will be ", now+delta)
