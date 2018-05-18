# input string 
# take string and loop through it: is the reverse the same as the forward? 
# Never odd or even

# str = "Never odd or even"

require 'pry'

@letters = []
@test = []

def test
  puts "Input a string to see if it is a palindrome"
  @str = gets.strip.downcase.gsub(" ", "") 
  @str.each_char { |c|  @letters << c }
  reverse
end

def reverse
  @letters.each {|l| @test.unshift(l) }
  if @letters == @test
    puts "It is a palindrome!"
  else 
    puts "Sorry, try again."
  end
end
test
