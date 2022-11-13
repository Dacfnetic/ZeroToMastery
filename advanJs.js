const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function onlyNumbers(arr){
	return arr.filter(
		element => typeof element === "number"
	);
}

function biggestNumberInArray(arr) {
	arrn = onlyNumbers(arr);
	var max = arrn[0];
	if(arrn[0] === undefined){
		max = 0;
	}
	for (var i = 0; i < arrn.length; i++) {
		if(arrn[i] > max){
			max = arrn[i];
		}
	}
	console.log(max);
}
function biggestNumberInArray2(arr) {


	var max = arr[0];
	if(arr[0] === undefined){
		max = 0;
	}
	for(item of arr){
		if(item > max){
			max = item
		}
	}
	console.log(max);
}

function biggestNumberInArray3(arr) {
	arrn = onlyNumbers(arr);
	var i = 0;
	var max = arrn[0];
	if(arrn[0] === undefined){
		max = 0;
	}
	do{
		if(arrn[i] > max){
			max = arrn[i];
		}
		i++;
	}while(i<arrn.length);
	console.log(max);
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
	for(item in basket){
		if(item == lookingFor){
			var text = item + ": " + item.value
			return item;
		}
	}
	return 0;
}