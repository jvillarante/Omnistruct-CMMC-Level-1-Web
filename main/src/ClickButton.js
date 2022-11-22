import { useState } from 'react';

const ClickButton = () => {
    const [answer, setAnswer] = useState(0);

    const clickYes = (answer) => {
        setAnswer(1);
        console.log(answer);
    }

    const clickNo = (answer) => {
        setAnswer(0);
        console.log(answer);
    }

    return (
        <div className='click-button'>
        <button onClick={() => clickYes(1)}>Yes</button>
        <button onClick={() => clickNo(0)}>No</button>
        </div>
        
    )
}

export default ClickButton;