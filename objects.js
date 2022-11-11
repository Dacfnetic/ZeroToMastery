var user = {
	username: "andrei",
	password: "supersecret"
}
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

var database = [user];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

for (var i = 0; i < todos.length; i++){
	todos[i] = todos[i] + "!";
}
console.log(todos);