package main

import "fmt"
import "./uberlib"

func main() {
	printer := &uberlib.Printer{}
	printer.Text = "Hoł hoł hoł"
	fmt.Print(printer.Print())
}
