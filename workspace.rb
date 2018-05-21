require 'pry'

# factorial


def factor 
  puts "Enter a number to get the factorial: "
  input = gets.strip.to_i
  if input <= 1
      puts "1"
  else result = (1..input).inject(:*)
    puts result
  end
end
factor