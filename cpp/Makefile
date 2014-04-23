CC = g++

all: net clean

net: net.o
	$(CC) -o $@ $^

net.o: net.cpp
	$(CC) -c $<

.PHONY: clean cleanest

clean:
	rm *.o

cleanest: clean
	rm net
