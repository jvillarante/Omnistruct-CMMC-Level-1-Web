import React from 'react';

const Results = () => {
    return (
        <body>
        <div className="results">
            <h1>Results</h1>
            <p>
                <h2>Here are your results:</h2>
                <div className="resultsBank">
                    <p>Is a list of authorized users maintained that states their identity and role?
                        <input type="button" value="Passed" class="right"></input>
                    </p>
                    <p>Are requests to make system changes authorized?
                        <input type="button" value="Failed" class="right"></input>
                    </p>
                </div>

                <h1>Client Information</h1>
                <p>
                    <h2>Enter your company's info:</h2>
                    <div className="companyInfo">
                        <p>
                                <div>
                                <p>
                                    <input type = "text" placeholder = "Company Name"/>
                                </p>
                                <p>
                                <input type = "text" placeholder = "Email Address"/>
                                </p>
                                <button>Submit</button>
                            </div>
                        </p>
                    </div>
                </p>
            </p>
        </div>
                {/* <div className="resultsContainer">
                     <h1>Results Page</h1>
                    <textarea rows = "4" cols = "30" 
                                    id = "result_id">
                                    </textarea>
                    <br />
                </div> */}
    </body>
    )
}

export default Results;