import React from 'react';

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
        </div>
    )
}



export default Assessment;