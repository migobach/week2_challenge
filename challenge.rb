# input string 
# take string and loop through it: is the reverse the same as the forward? 
# Never odd or even

# str = "Never odd or even"

require 'pry'

@letters = []

def test
 puts "Input a string to see if it is a palindrome"
 str = gets.strip.downcase
  str.each_char { |c|  @letters << c }
 puts "#{@letters}"
#  reverse_string
 binding.pry
end


# use .split("")

# def reverse(letters)
#   loop = letters.length
# end


# def reverse_string(letters) # method reverse_string with parameter 'string'
#   loop = letters.length
#   binding.pry       # int loop is equal to the string's length
#   word = ''                  # this is what we will use to output the reversed word
#   while loop > 0             # while loop is greater than 0, subtract loop by 1 and add the string's index of loop to 'word'
#     loop -= 1                  # subtract 1 from loop
#     word += string[loop]       # add the index with the int loop to word
#   end                        # end while loop
#   return word                # return the reversed word
# end

test 