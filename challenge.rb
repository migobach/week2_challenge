

require 'pry'


palindrome tester
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
# test

# sum an array
def sum
  arr = [12,23,34,45,56,67,78,89,90]
  total = arr.sum
  puts total
end
sum

# F > C
@tempF = 82

def tempToF
  tempC = ((@tempF - 30) / 1.8)
  wholeTemp = tempC.round
  puts "The temperature in celcius is: #{wholeTemp}"
end
tempToF

# vowel count
def vowelCount
  puts "Input a sentence to count the vowels."
  str = gets.strip
  output = str.count"/[aeiou]/"
  puts "Vowels used: #{output}"
  binding.pry
end
vowelCount

# roll two dice randomly
@dice = [1,2,3,4,5,6]
def twoDice 
  puts "Select and option:"
  puts "\t1) roll dice"
  puts "\t2) exit"
  input = gets.strip.to_i
    case input
    when 1
      dice1 = @dice.sample
      dice2 = @dice.sample
      puts "results: [#{dice1}, #{dice2}]"
      twoDice
    when 2
      exit
    end
end
twoDice
