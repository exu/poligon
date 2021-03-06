require 'em-websocket'
 
EventMachine::WebSocket.start(:host => "127.0.0.1", :port => 5005) do |ws|
  ws.onopen    { ws.send "Hello Client!"}
  ws.onmessage { |msg| ws.send "Pong: #{msg}" }
  ws.onclose   { puts "WebSocket closed" }
end
