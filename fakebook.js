var database =  [
	{
		username: "diego",
		password: "pass"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeLine: "So tired from all thah learning"
	},
	{
		username: "Sally",
		timeLine: "Javascript is soooo cool!"
	}
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

function signIn(uname,pass){
	if(uname === database[0].username && pass === database[0].password){
		console.log(newsFeed);
		return true;
	}
	alert("Sorry, wrong username or password");
	return false;
}
signIn(userNamePrompt,passwordPrompt);