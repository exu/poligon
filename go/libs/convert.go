package main

import (
	"github.com/exu/goimgdata"
	"os"
	"fmt"
)

func main() {
	filename := os.Args[1]
	fmt.Println(goimgdata.Convert(filename))
}
