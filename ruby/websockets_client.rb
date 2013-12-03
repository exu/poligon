require 'eventmachine'
require 'em-http-request'
 
EventMachine.run {
  http = EventMachine::HttpRequest.new("ws://127.0.0.1:5005").get :timeout => 0
 
  http.errback { puts "oops" }
  http.callback {
    puts "WebSocket connected!"
    http.send("Hello client")
    sleep 1
  }
 
  http.stream { |msg|
    puts "Recieved: #{msg}"
    http.send "Pong: #{msg}"
  }
}
