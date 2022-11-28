import React from 'react';
//import logo from "./image/Omni-Logo.png";
import { Link } from 'react-router-dom';

const Home = () => {
    return (

      <div className="homepage">
        <div class="title"> 
          <p> Cybersecurity Maturity Model Certification Assessment </p>
        </div>
          <div class="logo">
            <img src="https://omnistruct.com/wp-content/uploads/2021/10/omnistruct-logo.svg" alt="HTML"></img>
          </div>
            
              <div class="privacyInfo">
                <p class="paragraphHome">
                  Privacy Disclaimer:
                  After the "Start" button has been clicked, the Level 1 Cybersecurity Maturity Model Certification Assessment will begin.
                  Answers will be input by the company user. Once the assessment is completed, aPDF of will be created and will be sent to your email.
                  The information you provide within the assessment will be deleted after you leave the page and will not be stored anywhere,
                  so you will not be able to retrieve.
                </p>
              </div>

                <div class="startResultButtons">
                  <Link to="/CMMC-Assessment">Start Assessment</Link>
                  
                  <Link to="/results">Results</Link>
                  </div>
      
      </div>

       
    )
}

export default Home;
