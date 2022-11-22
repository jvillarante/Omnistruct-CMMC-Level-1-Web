import { useState } from 'react';
import QuestionsList from './QuestionsList';

const Assessment = () => {
    const [questionBank,] = useState([
        {q: 'Is a list of authorized users mainted that states their identity and role?', id: 1 },
        {q: 'Are requests to make system changes authorized?', id: 2 }
    ]);

    return (
        <div className="assessment">
            <QuestionsList questions={questionBank}/> <br />
        </div>
    )
}

export default Assessment;