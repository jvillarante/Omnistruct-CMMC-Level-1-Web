import logo from './logo.svg';
import './App.css';
//import './results.html';



function App() {
  return (
  <div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Privacy. Explanation about Omnistruct.
        </p>
        <a
          className="App-link"
          href="questionPage.html"
          
          rel="noopener noreferrer"
        >
          Start
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
