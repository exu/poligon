require 'nokogiri'
require 'open-uri'

# Get a Nokogiri::HTML:Document for the page we’re interested in...

url = 'http://ruby.learncodethehardway.org/book/'
doc = Nokogiri::HTML(open(url))

printf "Writing index.html\n"
File.open("learn_ruby/index.html", 'w') {|f| f.write(doc.css('div.body').to_html) }

doc.css('.toctree-l1 a').each do |a|
  chapter_url = a.attribute "href"

  chapter_doc = Nokogiri::HTML(open(url + chapter_url))
  chapter_content = chapter_doc.css('div.body').to_html

  print "Writing #{chapter_url}\n"
  File.open("learn_ruby/" + chapter_url, 'w') {|f| f.write(chapter_content) }
end

