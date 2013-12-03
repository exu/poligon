package main

import (
    "github.com/hoisie/web"
)

func hello(val string) string { return "hello " + val }

func hi(name string) string {
	return "hellół " + name
}

func main() {
    web.Get("/hi", hi)
    web.Get("/(.*)", hello)
    web.Run("0.0.0.0:9999")
}
