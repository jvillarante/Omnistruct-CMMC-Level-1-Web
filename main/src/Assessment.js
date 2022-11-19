import React from 'react';

const Assessment = () => {
    return (
        <div className="assessment">
            <p id = "question"></p>
            <input id = "yes" type = "radio" name = "questionAnswer"/> Yes<br/>
            <input id = "no"  type = "radio" name = "questionAnswer"/> No<br/>
            <input id = "back" type = "button" value = "Back" onclick="displayPreviousQuestion();" style = {{ visibility: 'hidden' }}/>
            <input type = "button" value = "Next" onclick="displayNextQuestion();"/> 
        </div>
    )
}

export default Assessment;