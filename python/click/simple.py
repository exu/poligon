import click
import os


@click.command()
@click.option('--upper', 'transformation', flag_value='upper',
              default=True)
@click.option('--lower', 'transformation', flag_value='lower')
def info(transformation):
    click.echo(getattr(os.uname()[0], transformation)())


@click.command()
@click.option('--shout', is_flag=True)
def info(shout):
    rv = os.uname()[0]
    if shout:
        rv = rv.upper() + '!!!!111'
    click.echo(rv)


@click.group()
def cli():
    pass

@click.command()
@click.option('/debug;/no-debug')
def log(debug):
    click.echo('debug=%s' % debug)


@click.command()
@click.option('--count', default=1, help='number of greetings')
@click.argument('name')
def hello(count, name):
    for x in range(count):
        click.echo('Hello %s!' % name)


@click.command()
def initdb():
    click.echo('Initialized the database')


@click.command()
def dropdb():
    click.echo('Dropped the database')


@click.command()
@click.option('--pos', nargs=2, type=float)
def findme(pos):
    click.echo('%s / %s' % pos)


@click.command()
@click.option('--message', '-m', multiple=True)
def commit(message):
    click.echo('\n'.join(message))


@click.command()
@click.option('--name', prompt='Your name please')
def hello(name):
    click.echo('Hello %s!' % name)


@click.command()
@click.password_option()
def encrypt(password):
    click.echo('Encrypting password to %s' % password.encode('rot13'))


cli.add_command(hello)
cli.add_command(initdb)
cli.add_command(dropdb)
cli.add_command(findme)
cli.add_command(info)
cli.add_command(commit)

if __name__ == '__main__':
    cli()
