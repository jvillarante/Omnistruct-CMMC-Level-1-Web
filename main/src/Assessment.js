import React from 'react';
//import './assessment.css';

var questions = ["Is a list of authorized users maintained that states their identity and role?", "Are requests to make system changes authorized?"];

var questionAnswers = [[false, false], [false, false]];

var questionNum = 0;

function displayNextQuestion() {
    questionAnswers[questionNum][0] = document.getElementById("yes").checked;
    questionAnswers[questionNum][1] = document.getElementById("no").checked;
    
    if(questionNum !== questions.length - 1) questionNum++;

    document.getElementById("yes").checked = questionAnswers[questionNum][0];
    document.getElementById("no").checked = questionAnswers[questionNum][1];

    if(questionNum > 0) document.getElementById("back").style.visibility = "visible";

    document.getElementById("question").innerHTML = questions[questionNum];

}

function displayPreviousQuestion() {
    questionAnswers[questionNum][0] = document.getElementById("yes").checked;
    questionAnswers[questionNum][1] = document.getElementById("no").checked;
    if(questionNum > 0) questionNum--;

    document.getElementById("yes").checked = questionAnswers[questionNum][0];
    document.getElementById("no").checked = questionAnswers[questionNum][1];
    
    if(questionNum === 0) document.getElementById("back").style.visibility = "hidden";

    document.getElementById("question").innerHTML = questions[questionNum];
}

function displayQuestionBox(){
    var el=document.getElementById("questionBox");
    var width=window.innerWidth-50;
    var height=window.innerHeight-50;
    el.style.left=width*Math.random() + "px";
    el.style.top=height*Math.random() + "px";

}

const Assessment = () => {
    return (
        <div className="assessment">
            <p id = "question">Is a list of authorized users maintained that states their identity and role?</p>
            <p>
                <input id = "yes" type = "radio" name = "questionAnswer"/> Yes<br/>
                <input id = "no"  type = "radio" name = "questionAnswer"/> No<br/>
                <input id = "back" type = "button" value = "Back" onClick={displayPreviousQuestion} style = {{visibility: 'hidden' }}/>
                <input type = "button" value = "Next" onClick={displayNextQuestion}/> 
            </p>

            <div id="questionBox">
                 Question Box
            </div>
            <head>
            <style>
            p.solid {border-style: solid;}
            </style>
            </head>
            <body>  
            <p class="solid">A solid border.</p>
            </body>
        </div>
        

    )

}



export default Assessment;