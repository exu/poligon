require 'json'

Cramp::Websocket.backend = :thin

class HomeAction < Cramp::Action
  self.transport = :sse

  on_start :send_latest_time
  periodic_timer :send_latest_time, :every => 2

  def send_latest_time
    data = {'time' => Time.now.to_i}.to_json
    render data
  end
end


