import React from 'react';

const Results = () => {
    return (
        <div className="results">

                <h1>Results Page</h1>
                <textarea rows = "4" cols = "30" 
                                id = "result_id">
                                </textarea>
                <br />    

        <h1>Client Information</h1>

                <legend>Fill In</legend>
                    <div>
                        <p>
                        <input type = "text" placeholder = "Company Name"/>
                        </p>
                        <p>
                        <input type = "text" placeholder = "Email Address"/>
                        </p>
                        <button>Submit</button>
                    </div>

    </div>
    )
}

export default Results;