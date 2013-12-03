require 'romans'

s = "Clio 3"

s.scan(/[0-9]+/).each do |num|
  s.gsub!(num, num.to_i.to_s_roman)
end

p s


