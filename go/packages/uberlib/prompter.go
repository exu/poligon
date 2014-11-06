package uberlib

import "fmt"


type Prompter struct {
	 Text string 
}

func (this *Prompter) Prompt (a string) {
	fmt.Println(a)
}
