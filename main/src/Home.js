import React from 'react';
import logo from "./image/Omni-Logo.png";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
                <img src={logo} alt="HTML" width="500" height="150" ></img>
        <p>
          This will be the Privacy Disclaimer. The page will also have an explanation about Omnistruct.
        </p>

        <Link to="/CMMC-Assessment">Start Assessment</Link>

        <br />

        <Link to="/results">Results</Link>
        </div>
    )
}

export default Home;