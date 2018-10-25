//this will be javascript codes


var ourFirstVariable = 2; 

var ourSecondVariable = 1; 


var greetingArray = ["Hello, how are you doing", "Hi leave me alone", "Ieeeeeh"];

console.log(greetingArray[0])// => Hello, how are you doing
console.log(greetingArray[1])// => Hi leave me alone
console.log(greetingArray[2])// => Ieeeeeh


var input = "Hello";


var intent = {

		greeting:["hello", "How are you?"],
		bye:["Bye","Later", "Well, goodbye now"],
		identity:["I am the terminator", "I don't know yet what or who I am"],
		film:["I like films", "My favorite is Shawshank Redemption", "Actually my favorite is Pulp Fiction"]
		default:["I don't know what you mean", "I don't understand", "Can you rephrase the question?"]
}

var userinputArray = ["Hello", "what", "is", "your", "favorite", "film"]

function robotResponse(intention){
	// robot response[greeting] [0]
	console.log("please work", intentResponse{})
	
	}
function robotlogic(userInput){
//	if(userInput === "Hello")
	//3. Randomise response 

	//Hello, wehat sort of films do you like?

	//userinput -> "Hello this is my input"

	var userArray = userInput.split(' ');

	var scoreObject = {
		greeting:0,
		bye:0,
		identity:0,
		film:0,
		default:0
	}


	console.log(scoreObject[0].greeting);

	//1. Figure out what the intent is of the userInput
	userArray.forEach(function(element){
		if(element ==="Hello" || element === "hi"){
			scoreObject.greeting++;
			//greetingScore++;
		}
		else if(element ==="bye" || element === "goodbye" || element === "doei"){
			scoreObject.bye++;
		}
		else if(element ==="what" || element === "are"|| element ==="you"){
			scoreObject.identity++;
		}
		else if(element ==="film" || element === "movie" || element === "films" || element === "movies"){
			scoreObject.film = filmScore + 10;
		}
		else if(element === "like"){
			scoreObject.film++;
		}
		else{
			scoreObject.default++;
		}

	}

    var max = math.max(scoreObject.greeting, scoreObject.bye, scoreObject.identity, scoreObject.film, scoreObject.default)

    var intention = "";
    for(var key in scoreObject){
    	if (scoreObject[key] ===max){
    		intention = key;
    	}
    }
// Which variable has the highest score?
	//highestScore = greetingScore;
	//if(greetingScore < byeScore)  highestScore = byeScore
	//if(highestScore < identityScore) highestScore = identityScore
	//if (highestScore < filmscore) highestScore = filmScore
	//if (highestScore < defaultscore) highestScore = defaultscore;

//2. if we know intent -> respond appropriately.
     robotResponse


		Things[i]
	}
	//here we are gonna have our logic for a dialogue
	//if, else and conditionals. 
	if (userInput === "Hello") {
		//make robot say hello back
		responsiveVoice.speak("Hello there! How are you doing?")
		}
	else if (userInput === "Not bad") {
		//make robot talk about weather.
		responsiveVoice.speak("How do you like the weather today?")
		}
	else{
		//make robot ask
	 	responsiveVoice.speak("I don't understand, can you say something else?")
		}
	}

var userInputField = document.getElementById("robot-text");
var button = document.getElementById("talk-button");

button.addEventListener("click", function(){
	//body Function
	var userInput = userInputField.value;
	robotlogic(userInput);

});

function firstfunction(parameter1){
//body of our code.
	if (parameter1 === "Hello"){
		//make robot say hello back
		responsiveVoice.speak("Hello there!");
	}
	else if(parameter1 === "Bye"){
		// make robot say goodbye.
	}
	else{
		//make robot say something else
	}

}

firstfunction(ourFirstVariable);

