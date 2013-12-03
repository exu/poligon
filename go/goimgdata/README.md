# img content to data URI in go lang


## Usage:

Save example code to some file e.g. `convert.go`

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


next run `go build convert.go` command in your shell, next run
`./convert PATH_TO_YOUR_JPG_GIF_PNG_IMAGE_FILE`

You'll need golang (in ubuntu `sudo apt-get install golang`)
