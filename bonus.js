a = 5;
b = 7;
c = 2;
d = 6;

// addition
console.log(a + b)

// // sum an array
var arr = [7,8,9,6,7,9]
var sum = 0

for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum)

// //F > C
tempF = 82;
tempC = (tempF - 30) / 1.8
console.log(tempC)

// vowel count
function getVowels(str) {
  var m = str.match(/[aeiou]/gi)
  return m === null ? 0 : m.length
}
console.log(getVowels("I really love JavaScript"))

//roll two dice
function rollDice() {
  var dice1 = 1 + Math.floor(Math.random() * 6)
  var dice2 = 1 + Math.floor(Math.random() * 6)
  console.log ([dice1, dice2])
}
rollDice()

//average an array
var avg = sum/arr.length
console.log(avg)


//FizzBuzz 
for (var i=1; i <= 100; i++)
  {
    if (i % 15 === 0)
      console.log("FizzBuzz")
    else if  (i % 5 === 0)
      console.log("Buzz")
    else if (i % 3 === 0)
      console.log("Fizz")
    else 
      console.log(i)
  }

//Factoral
function factoralize(num) {
  var result = num
  if (num === 0 || num === 1)
    return 1
  while (num > 1) {
    num--
  result = result * num
 }
  return result
}
console.log(factoralize(6))


// area of a triangle
function hypTri(a, b) {
  var sideA = Math.pow(a, 2)
  var sideB = Math.pow(b, 2)
  var sides = a + b
  var hyp = Math.sqrt(sideA + sideB)
  var p = (a + b + hyp) * 0.5
  var preArea = p * ((p-a) * (p-b) * (p-hyp))
  var area = Math.sqrt(preArea)
  return area
 }
console.log(hypTri(6, 5))

// reverse a number
function reverse(num) {
  var numStr = num.toString()
  return numStr.split("").reverse().join("")
}
console.log(reverse(123456789))

// palindrom checker
function palin(words) {
  var tester = words.toLowerCase().replace(/\s/g, '')
  var change = tester.split("").reverse("").join("")
  if (change === tester)
    return "It is a palinrome!"
  else
    return "Sorry, try again."
    
}
console.log(palin("racecar"))


//put a string in alpha order
function alpha(str) {
  var tester = str.toLowerCase().replace(/\s/g, '')
  var order = tester.split("")
  var aToZ = order.sort().join("")
  return aToZ
}
console.log(alpha("Put me in alpha order"))

// capitalize the first letter of words in a string
function capitalize(str) {
  var arr = str.toLowerCase().split(' ')
  var arrNew = []
  for(var i = 0; i < arr.length; i++){
    arrNew.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
    }
  return arrNew.join(' ')
}
console.log(capitalize("Here is a sentence that cAn be changEd"))


// find the longest word in a string 
// .findIndex() Math.max.apply(null, array) .length
function longWord(str) {
  var noPunc = str.replace(/[^A-Za-z0-9\s]/g, "")
  var arrWords = noPunc.split(' ')
  var longest = []
  for(var x = 0; x < arrWords.length; x++){
    longest.push(arrWords[x].length)
   }
  var longestIndex = Math.max.apply(null, longest)
  for(var y = 0; y < longest.length; y++){
    if(longest[y] === longestIndex){
      return arrWords[y]
    }
  }
}
console.log(longWord("Which word one of these fabulous words is longest?"))


// count the number of vowels
function countVow(str) {
  var vowels = str.match(/[aeiou]/gi)
  return vowels.length
}
console.log(countVow("There are so many vowels and so little time."))


//prime number tester
function prime(num) {
  if (num < 2) return false
  for(var x = 2; x < num; x++){
    if(num%x===0)
      return false;
  }
  return true
}
console.log(prime(8))


// find second lowest, and second highest, respectively
// remember the caveat of the .sort() function (integers versus strings)
function highLow(arr) {
  var orderArr = arr.sort(function(a, b){return a-b})
  var high = Math.max.apply(null, orderArr)
  var low = Math.min.apply(null, orderArr)
  var finalHigh = orderArr[(orderArr.length - 1)]
  var finalLow = orderArr[1]
  return [finalLow, finalHigh]
}
console.log(highLow([30,3,20,7,5,6,4,8,1,14]))
