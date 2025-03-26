import React from "react";
import "./style/LegalInfo.css";
import a from  "../pics/a.jpeg";
import b from  "../pics/b.jpg";
import c from  "../pics/c.jpeg";
import d from  "../pics/d.jpg";
import e from  "../pics/e.jpeg";

const LegalInfo = () => {
  return (
    <div>
      <div class="legal-container">
        <h1>Hire a Lawyer here...</h1>
        <div class="conA">
        <div className="a">
                      
        <img src={a} alt="a" />
        </div>
            <div class="lawinfo">
            <h2>Danush Perera</h2>
            <h3>Legal Advisor<br></br></h3>
            <p>Location - Colombo<br></br>
            Contact No - 0112326598</p>
            </div> </div>
        <div class="conB">
        <div className="b">
                      
             <img src={b} alt="b" />
              </div>
              <div class="lawinfo">
              <h2>Danush Perera</h2>
              <h3>Legal Advisor<br></br></h3>
              <p>Location - Colombo<br></br>
              Contact No - 0112326598</p>
              </div> 
              </div>
        <div class="conC">
        <div className="c">
                  
            <img src={c} alt="c" />
            </div>
            <div class="lawinfo">
            <h2>Danush Perera</h2>
            <h3>Legal Advisor<br></br></h3>
            <p>Location - Colombo<br></br>
            Contact No - 0112326598</p>
            </div> 
            </div>

        <div class="conD">
        <div className="d">
                  
            <img src={d} alt="d" />
            </div>
            <div class="lawinfo">
            <h2>Danush Perera</h2>
            <h3>Legal Advisor<br></br></h3>
            <p>Location - Colombo<br></br>
            Contact No - 0112326598</p>
            </div> 
            </div>

        <div class="conE">
        <div className="e">
                  
            <img src={e} alt="e" />
            </div>
            <div class="lawinfo">
            <h2>Danush Perera</h2>
            <h3>Legal Advisor<br></br></h3>
            <p>Location - Colombo<br></br>
            Contact No - 0112326598</p>
            </div> 
            </div>

        </div>
      </div>
    
  );
};

export default LegalInfo;