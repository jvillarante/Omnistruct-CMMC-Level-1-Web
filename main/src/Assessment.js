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

            <div className = "questionBank">
                <h1>
                    Question Bank
                </h1>
                <div className="questionButtons">
                    <nav>
                        < ul>
                             <li><a href="#"><button>Question 1</button></a></li>
                             <li><a href="#"><button>Question 2</button></a></li>
                             <li><a href="#"><button>Question 3</button></a></li>
                             <li><a href="#"><button>Quesiton 4</button></a></li>
                             <li><a href="#"><button>Question 5</button></a></li>
                             <li><a href="#"><button>Question 6</button></a></li> 
                             <li><a href="#"><button>Question 7</button></a></li> 
                             <li><a href="#"><button>Question 8</button></a></li>
                             <li><a href="#"><button>Question 9</button></a></li>
                             <li><a href="#"><button>Question 10</button></a></li>
                             <li><a href="#"><button>Question 11</button></a></li>
                             <li><a href="#"><button>Question 12</button></a></li>
                             <li><a href="#"><button>Question 13</button></a></li>
                    </ul>
                </nav>
                </div>
            </div>
            
        </div>

    )

}



export default Assessment;