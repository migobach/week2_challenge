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


