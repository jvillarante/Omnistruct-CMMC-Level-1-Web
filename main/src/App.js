import './App.css';
//import './results.html';



function App() {
  return (
  <div>
    <div>
      <p>
        <input type = "text" placeholder = "Company Name:"/>
      </p>
      <p>
        <input type = "text" placeholder = "Email Address:"/>
      </p>
      <button>Submit</button>
    </div>  

    <div className="App">
      <header className="App-header">
        <img src= "Omni-Logo.png" alt="HTML" width="500" height="150" ></img>
        <p>
          This will be the Privacy Disclaimer. The page will also have an explanation about Omnistruct.
        </p>
        <a
          className="App-link"

          href="questionPage.html"
          
          rel="noopener noreferrer"
        >
          Start Questionaire
        </a>

        <br></br>

        <a
          className="Result-Link"
          href = "resultsPage.html"

          rel = "noopener noreferrer"
        >
          Result
        </a>
        </header>
      </div>
    </div>
  );
}

export default App;
