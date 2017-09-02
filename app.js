
//set the timer variable "d" here because it worked, when I just defined it in the function it would not work right at all or I had problems with it counting down 2 seconds at a time.
var d = 5;

//
function myTimer() {

if (d>=0) {
  document.getElementById("visibleTimer").innerHTML = d--;

}

//This stops the visible timer at zero seconds and activates the final submitQuiz function. Unfortunately keeps looping the answers.

else{

	d>=0;
	submitQuiz();


	//You were supposed to be the Chosen One!!! This "myStopFunction" is set lower in the script and should have stopped the timer. Unfortunately I couldn't get it to be recognized making this whole thing continue its function after the "d" variable hit zero.

	myStopFunction(myVar);
}



}

// This is the function for the Start button at the beginning. It starts the timer, doesn't show anything as I ran out of time to add that functionality after hitting the wall trying to stop the counter.

function startQuiz(){

		var myVar = setInterval(function() {
  		myTimer()
		}, 1000);
		var d = 5;


	
}

	//This is the function that is activated if the user hits the Submit button at the bottum or the timer runs out. And continues running out...

	function submitQuiz() {
		console.log('submitted');


	// this is stuff I found, don't totally understand it but it effectively gets the variable of 1 or 0 from the questions, allows us to determine how many they got right and wrong.
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero, I don't understand why exactly it's NaN first but changing to zero helps with math.
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
			console.log("This" + answerValue);
		}

	// adds the right answers together
		var calcScore = (answerScore('question1') + answerScore('question2') + answerScore('question3') + answerScore('question4') + answerScore('question5'));
		console.log("CalcScore: " + calcScore); // it works!

	// prints the correct answers at the end of the quiz, goes crazy due to the inability of the code to stop the timer interval
		function correctAnswer (correctAnswerNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctAnswerNo).innerHTML) + "</strong>");
			}

	// counts up answers if they're correct or not
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctAnswer1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctAnswer2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctAnswer3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctAnswer4', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctAnswer5', 5);
		}

		

	// counts the questions for use later
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// calculates the total score with total questions, can add more questions with correct addition later.
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// conditional for if you get a welcome surprise of answering all these questions right.
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>A surprise to be sure, but a welcome one.</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}



$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

function myStopFunction() {
    clearInterval(myVar);
}




});

