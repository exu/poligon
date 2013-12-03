package main

import (
        "fmt"
        "math/rand"
        "time"
)

func hit(msg string, in <-chan string, out chan<- string) {
        for recv := range in {
                <-time.After(time.Duration(rand.Intn(500) + 100) * time.Millisecond)
                fmt.Println(recv)
                out <- msg
        }
}

func main() {
        ping, pong := make(chan string), make(chan string)

        go hit("Ping!", pong, ping)
        go hit("Pong!", ping, pong)

        ping <- "Ping!"
        <-time.After(10 * time.Second)
}
