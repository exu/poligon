import os

for i in os.fwalk("."):
    print(i)
    for f in i[2]:
        print(f)



for i in os.walk("."):
    print(i)



process = os.popen("ls -la")

print(process)
