require 'gserver'

#
# A server that returns the time in seconds since 1970.
#
class TimeServer < GServer
    def initialize(port=10001, *args)
        super(port, *args)
    end
    def serve(io)
        io.puts(Time.now.to_s + ' aaa')
        sleep 10
    end
end



server = TimeServer.new
# server.audit = true                  # Turn logging on.
server.start
