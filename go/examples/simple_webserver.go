package main

import (
	"fmt"
	"net/http"
	"encoding/json"
)


type Counter int
type Response struct {
    Body string `json:"body"` //field tags
    Count int `json:"counter"`
}

func (ctr *Counter) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	message := ""
	*ctr++

	switch *ctr {
	case 1:
		message = "Hohhoo"
	case 2:
		message = "Hioh"
	case 3:
		message = "HOhoKKK"
	default:
		message = fmt.Sprint("I've reached ", *ctr, " level")
	}

	res := &Response { Body: message, Count: int(*ctr) }
	enc := json.NewEncoder(w)
	enc.Encode(res)
}



func main() {
	ctr := new(Counter)
	http.Handle("/counter", ctr)
	http.ListenAndServe(":8080", nil)
}
