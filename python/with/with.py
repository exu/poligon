class Some:
    def __enter__(self):
        print("aaaa")

    def __exit__(self, a, b, c):
        print("exit")


with Some() as f:
    print("inside")
