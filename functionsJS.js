function sayHello() {
	console.log("Hello");
}

sayHello();

var sayBye = function() {
	console.log("Bye");
}

sayBye();

function sing(song){
	if(song == 1){
		console.log("AHHHHHHH");
		console.log("TEEEEEEE");
	}else if(song == 2){
		console.log("laaa deee daaa");
		console.log("laaaaa");
	}	
}

sing(1);
sing(2);

function multiply(a,b){
	if (a>10 || b> 10){
		return "that's too hard";
	}
	return a * b;
}

console.log(multiply(5,11));

//var age = prompt("What is your age?");

function checkDriverAge(age){
	if (Number(age) < 18) {
		console.log("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

var checkDriverAge2 = function(){
	if (Number(age) < 18) {
		console.log("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge(20);

var list = [["tiger", "cat", "bear", "bird"]];
console.log(list[0]);

var numbers = [1,2,3,4];
var booleans = [true,false,true];
var functionList = [function apple(){},function pineapple(){}];
var mixedList = ["apple",5,undefined,true,function apple2(){}];

console.log(list[0][2]);
