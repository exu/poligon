import pickle


class SomeTestigClass:
    def __init__(self):
        self._data = []

    @property
    def get_data(self):
        return self._data

    def set_data(self, data):
        self.data = _data

    def method1(self):
        return 1233

    def method2(self):
        return 398439


c = SomeTestigClass()
c.data = ['apple', 'mango', 'carrot']

shoplistfile = 'shoplist.data'
with open(shoplistfile, 'wb') as f:
    pickle.dump(c, f)


f = open(shoplistfile, 'rb')
loaded = pickle.load(f)
print(loaded.data)
