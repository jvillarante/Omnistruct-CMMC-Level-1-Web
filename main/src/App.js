import logo from './logo.svg';
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
        </header>
      </div>
    </div>
  );
}

export default App;
