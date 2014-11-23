# -*- coding: utf-8 -*-

import subprocess

subprocess.call(["uname", "-a"])
subprocess.call("df -h", shell=True)


res = subprocess.Popen(['uname', '-sv'], stdout=subprocess.PIPE)
uname = res.stdout.read().strip()
print(uname)

print("Linux" in str(uname)) # its binary string
