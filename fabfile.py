from fabric.api import *

env.remote_app_dir = '/var/www/mi.panyushk.in'
env.user = 'root'
env.repo = 'git@github.com:misha-panyushkin/panyushk.in.git'
env.forward_agent = True

def prod():
    """Set the target to production."""
    env.hosts = ['91.218.231.58']
    env.branch = 'master'

def deploy():
    require('hosts', provided_by=[prod])
    require('remote_app_dir', provided_by=[prod])

    with settings(warn_only=True):
        if run("test -d %s/.git" % env.remote_app_dir).failed:
            run("git clone " + env.repo + " " + env.remote_app_dir)

    with cd(env.remote_app_dir):
        run("git pull origin")
        run("git checkout -f %s" % env.branch)
        run("sudo fig build")
        run("sudo fig up -d")