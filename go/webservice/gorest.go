package main
import (
  "code.google.com/p/gorest"
  "net/http"
)
func main() {
  gorest.RegisterService(new(HelloService)) //Register our service
  http.Handle("/",gorest.Handle())
  http.ListenAndServe(":8787",nil)
}

//Service Definition
type HelloService struct {
  gorest.RestService `root:"/tutorial/"`
  helloWorld  gorest.EndPoint `method:"GET" path:"/hello-world/" output:"string"`
  sayHello    gorest.EndPoint `method:"GET" path:"/hello/{name:string}" output:"string"`
}
func(serv HelloService) HelloWorld() string{
  return "Hello World"
}
func(serv HelloService) SayHello(name string) string{
  return "Hello " + name
}
