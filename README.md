
## [1 Return the Sum of Two Numbers](https://edabit.com/challenge/3LpBLgNRyaHMvNb4j)

## answer
```js
function addition(a, b) {
	return a + b
}
console.log(addition(3, 2))
```
----------------------------------------

## [2 Return the Next Number from the Integer Passed](https://edabit.com/challenge/NAQhEoxbofPidLxm9)

### answer

```js 
function addition(num) {
	return ++num
}   
```
---------------------------------------

## [ 3 Convert Age to Days](https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw)

**Answer**
```js
function calcAge(age) {
	return age* 365
}
console.log(calcAge(1) )
```
------------------------------------

## [4 Power Calculator](https://edabit.com/challenge/wAdE9te55cowBLcPs)

**Answer**

```js
function circuitPower(voltage, current) {
	return  voltage*current
}
circuitPower(230,10)
```
-------------------------------------

## 5 [ Maximum Edge of a Triangle](https://edabit.com/challenge/nhXofMMyrowMyr9Nv)

**answer**
```js 
function nextEdge(side1, side2) {
	return side1+side2 -1
}
nextEdge(11, 17)
```
-----------------------------------------

## 6 [Find the Perimeter of a Rectangle](https://edabit.com/challenge/XnJ24rWW7iJkNrtsh)

**answer**

```js
function findPerimeter(length, width) {
	return ((length + width) * 2)
}
findPerimeter(77, 3)
```
------------------------------------------

## 7 [https://edabit.com/challenge/8q54MKnRrm89pSLmW](https://edabit.com/challenge/8q54MKnRrm89pSLmW)
**answer**

```js
function convert(minutes) {
	return minutes *60
}
convert(5)
```
--------------------------------------------

## 8 [Area of a Triangle](https://edabit.com/challenge/3CaszbdZYGN4otQD8)
**Answer**

```js 
function triArea(base, height) {
	return (base*height)/2
}
triArea(4, 3) 
```
-------------------------------------------

## [9 Return the First Element in an Array](https://edabit.com/challenge/QaApgtePE6QrCZ64o)
**Answer**

```js
function getFirstValue(arr) {
	return arr[0]
}
```
-------------------------------------------

## [10 Convert Hours into Seconds](https://edabit.com/challenge/6AnQqiEjkJdZrWhPS)
**Answer**
```js
function howManySeconds(hours) {
	return (hours* 3600)
}
console.log(howManySeconds(2))

```
--------------------------------------------

## [11 Return the Remainder from Two Numbers](https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk)
**Answer**
```js
function remainder(x, y) {
	return x%y
}
console.log( remainder(1, 3))
```
---------------------------------------------

## [12 Return Something to Me!](https://edabit.com/challenge/MvZK536X7fyrWH8Qc)
**Answer**

```js
function giveMeSomething(a) {
	return  `something ${a}`
}
giveMeSomething("doston")
```
---------------------------------------------

## 13 Get data 

**Answer**
```js
 let data = new Date();
 let hour = data.getHours();
 let minut = data.getMinutes();
 console.log("Hours:",hour,"Minut:",minut);

```
----------------------------------------------

## [14 Is the Number Less than or Equal to Zero?](https://edabit.com/challenge/PTiLYyb4A69KZtBCg)

**Answer**
```js
function lessThanOrEqualToZero(num) {
	return num <= 0
}
```
---------------------------
## [15 Basketball Points](https://edabit.com/challenge/Y46Xp2pcvTB77bmdD)

**Answer**
```js
function points(twoPointers, threePointers) {
	return ((twoPointers*2)+ (threePointers*3))
}
```
----------------------------------
## [16 Less Than 100? ](https://edabit.com/challenge/9MjEpkL7yAjAqiH58)

**Answer**

```js
function lessThan100(a, b) {
	return ((a+b) < 100) ? true : false;
}
 ```
 ----------------------------------
 ## [18 Basic Variable Assignment](https://edabit.com/challenge/ZNwHGgHvsdnYwJ5WK)

 **Answer**
 ```js
 function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}
```
----------------------------------

## [19 Sum of Polygon Angles](https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG)

**Answer**

```js
function sumPolygon(n) {
	return (n-2)*180
}
```

----------------------------
## [19 Using the "&&" Operator](https://edabit.com/challenge/vJCZmgvvDjehyDcDK)
***answer***
```js
function and(a, b) {
	if (a && b)
		return true
	else(b && a)
	return false
}
```

## [21 ]
----------------------------------
## [22 Fix the Expression](https://edabit.com/challenge/FipbQSYquQLPZ8QXG)
**answer**

```js
function isSeven(x) {
	return x === 7 ? true : false ;
}
isSeven("7")
```
--------------------------------
## [23 Are the Numbers Equal?](https://edabit.com/challenge/QSnaSH5S3oxZkwcNc)
```js
function isSameNum(num1, num2) {
	if (num1 === num2){
		return true
	} else{
		return false
	}
}
```
----------------------------------
## [24 Convert Hours and Minutes into Seconds](https://edabit.com/challenge/JesaFi5ntBEbGT8bu)

**answer** 

```js
function convert(hours, minutes) {
	return (hours*3600)+ (minutes *60)
}-
```
---------------------------------------
## [25 function checkEquality(a, b)] 
	
```js
	if (a === b){
		
		return true
	}else{ 
		return false
}
checkEquality[(2, "2")]
```

-------------------------------------
## [25 Profitable Gamble](https://edabit.com/challenge/ghbHrRnRiDz9fvQNF)

**Answer**
```js
function profitableGamble(prob, prize, pay) {
	return (prob * prize) > pay ? true :false 
}
profitableGamble(0.2, 50, 9)
```

-------------------------------
## [26 Eval() function ]()

**AnsWer**
```js
function calculator(str) {
	return eval(str)
}
console.log(calculator("5 + 6"));
```
------------------------------
## [27 Miserable Parody of a Calculator](https://edabit.com/challenge/fh9i7k936rvfjnCYR)
**Answer**
```js
   function calculator(str) {
	return eval(str)
}
calculator("23+4")
```
----------------------------
## [28 Let's Fuel Up!](https://edabit.com/challenge/YMWDcSuYwYvve3HZj)
**Answer**
```js


```
-------------------------------
## [29 Is the String Empty?](https://edabit.com/challenge/EzbfiquDoAc2Zc9FL)
**Answer**
```js
```
-------------------------------
## [30 Pair Management](https://edabit.com/challenge/BFnsRqe8PFvEwcRNt)
**Answer**
```js

```
--------------------------
## [31 Two Makes Ten](https://edabit.com/challenge/5erCDJ8eJDrXkmwTK)
**Answer**
```js
```
--------------------------
## [32 Frames Per Second](https://edabit.com/challenge/d9suvbchE2bnHNQuK)
**Answer**
```js
```
---------------------------
## [33 Boolean to String Conversion](https://edabit.com/challenge/KSTkFSnaYBJdo6PHx)
**Answer**
```js

```
----------------------------
## [34 Buggy Code (Part 2)](https://edabit.com/challenge/uE9AJ4sSrrpSASMpu)
**Answer**
```js

```
------------------------------------
## [35 Compare Strings by Count of Characters](https://edabit.com/challenge/yHGowWucg3k2kJdZ4)
**Answer**
```js
```
--------------------------------

## [36 Check if an Integer is Divisible By Five](https://edabit.com/challenge/EzbfiquDoAc2Zc9FL)
**Answer**
```js

```

----------------------------------
## [37 Multiple of 100](https://edabit.com/challenge/qMr6wYGr6NaXAPQGF)

**Answer**

```js

function divisible(num) {
	return (num % 100 === 0);
}

```
---------------------------------------------
## [38 Divides Evenly ]() 

**Answer**

```js

function dividesEvenly(a, b) {
	return a % b === 0
}

```
-------------------------------------------------

## [39 Area of a Rectangle](https://edabit.com/challenge/g6b9HqkXqWu6GpfTo)

**Answer**

```js
function area(h, w) {
	return h > 0 && w > 0 ? h * w : -1
}
```
---------------------------------------------

## [40 Evaluate an Equation](https://edabit.com/challenge/n2bFd2enCnHJkTwsK)

**Answer**

```js
function eq(evaluate) {
	return eq = eval;
}
```
-------------------------------------------------

## [41 Learn Lodash: _.drop, Drop the First Elements of an Array](https://edabit.com/challenge/NMdKxEradTmpNnomZ)

**ANSWER**
```js
function drop(arr, val = 1) {
    for(var i = 0; i < val; i++)
    arr.shift();
  return arr;
}
drop([1, 2, 3], 1)
```
--------------------------------------------------

## [42 Return Negative](https://edabit.com/challenge/iDxwkarcJcmkDA8tq)
**Answer**
```js
function returnNegative(n) {
	return -Math.abs(n)
}
```
--------------------------------------------------

## [43 Recursion: Length of a String]()

**Answer**

```js

function length(str) {
	 return [...str].length
}

let a ="doston"
console.log(a.length)
```
---------------------------------------------------

## [44 Return a String as an Integer](https://edabit.com/challenge/rGsgEswWuW339yNxY)

**anwer**

```js
function stringInt(str) {
	return parseInt(str)
}
let a ="2344"
console.log(parseInt(a))
```
### staringdagi malumotni stringdan chiqarish


-------------------------------------------

## [45 Concatenate First and Last Name into One String](https://edabit.com/challenge/RQwdZmtrW8mCnuCMN)

**answer**

```js
function concatName(firstName, lastName){
	return (lastName.concat(', ', firstName));
}
```
-----------------------------------------------------

## [46 Upvotes vs Downvotes](https://edabit.com/challenge/654ABGmNS5GqscE8C)
**Answer**
```js
function equation(s){
	return (eval(s))
}
```
------------------------------------------------------

## [47 Upvotes vs Downvotes](https://edabit.com/challenge/654ABGmNS5GqscE8C)
**Answer**
```js
function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes
}
```
-----------------------------------------------------

## [48 Reverse an Array ](https://edabit.com/challenge/kJQYTCCWSnzhXG9dn)
```js
function reverse(arr) {
	return arr.reverse()
}
console.log(reverse([1, 2, 3, 4]))
```
---------------------------------------------