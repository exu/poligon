from peewee import *

db = MySQLDatabase('nu', user='root')

class User(Model):
    username = CharField()
    password = CharField()

    class Meta:
        db_table = "users"
        database = db # This model uses the "people.db" database.


if __name__ == '__main__':
    print "Hello!"
    for user in User.select():
        print "%s\n" % user.username
