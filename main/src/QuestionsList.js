import ClickButton from "./ClickButton";

const QuestionsList = (props) => {
    const questionList = props.questions;
    console.log(props);

    return (
        <div className="questions-list">
            {questionList.map((question) => (
                <div className="question" key={question.id}>
                    <h2>Question {question.id}</h2>
                    <p>{question.q}</p>
                    <ClickButton /> <br />
                </div>
            ))}
        </div>
    )
}

export default QuestionsList;