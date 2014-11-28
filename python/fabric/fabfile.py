from __future__ import with_statement
from fabric.api import local, settings, abort, run, cd, env, task
from fabric.contrib.console import confirm
from fabric.colors import green, red, blue, yellow
from fabtools.user import add_ssh_public_key, create
from fabric.tasks import execute
from fabtools import require
import os
import fabtools
from fabtools.shorewall import HTTP, Ping, SSH, rule


env.user = 'exu'
# env.hosts = ['edis']
env.use_ssh_config = True

env.users = [
    "aaa",
    "bbb"
]

def host_type():
    run('uname -s')

def local_stuff(for_what = ""):
    local("ls -la")
    local("echo '%s'" % for_what)

    with cd("some/dir"):
        local("pwd")
        local("touch file1.txt")
        local("cat file.txt")


def task_a():
    print(green(run('ls')))


def task_b():
    run('whoami')


@task
def install_dependencies(user):
    require.deb.package("python")
    require.deb.package("python-pypy")
    require.deb.package("selenium-server")
    require.deb.package("nginx")
    require.deb.package("redis")
    require.nginx.proxied_site('example.com',
        port=80,
        proxy_url='http://127.0.0.1:8080/',
        docroot='/path/to/myapp/static',
    )

@task
def harden():
    fabtools.ssh.harden() #disable SSH pass and root acceess
    require.shorewall.firewall(
        rules=[
            Ping(action='REJECT'),
            SSH(),
            HTTP(),
            rule(port=1234, source=hosts(['example.com'])),
        ]
    )

@task
def add_user(user):
    keys = []

    file = "keys/%s.id_rsa.pub" % user
    if os.path.exists(file):
        keys = [file]

    create(user, extra_groups=['sudo'], ssh_public_keys=keys)

@task
def create_default_users():
    for env.user in users:
        add_user(user)


@task
def install_new_system():
    execute("install_dependencies")
    execute("create_default_users")
    execute("harden")
