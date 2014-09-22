from fabric.api import local
from fabric.contrib import project
from fabric.api import env

env.hosts = ['root@ks']

def hello(name="world", lol="akak"):
    print("Hello {} {}!".format(name, lol))
    local("ls -la")

def sync():
    project.rsync_project("/srv/www/fab_example/");
