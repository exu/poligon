require 'goliath'

class Go < Goliath::API
  # reload code on every request in dev environment
  use ::Rack::Reloader, 0 if Goliath.dev?

  def response(env)
    [200, {}, "{response:'Hello World'}"]
  end
end
