import React from "react";
import western from "../pics/western.png";
import central from "../pics/central.png";
import southern from "../pics/southern.png";
import northcentral from "../pics/northcentral.png";
import eastern from "../pics/eastern.png";
import uva from "../pics/uva.png";
import sabara from "../pics/sabara.png";
import northwestern from "../pics/northwestern.png";
import northern from "../pics/northern.png";
import banner from "../pics/banner.jpg";
import { FaGlobe } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
      <div>
        <div className="ban">
                      <center>
                      <img src={banner} alt="banner" /></center>
                    </div>
        
        <header className="header" id="header">
          <div className="head-bottom">
          
            <h2>Get Lands Here</h2>
            <p>At the moment, Sri Lanka is dealing with a major economic crisis. For the large population of the nation, there is no food. 
              Agriculture is the best response to the food issue. But there isn't enough land to cultivate, which is the issue. particularly 
              in urban areas. However, there are plenty of lands in the villages but no one to farm them. The economic crisis will be over 
              if we cultivate those neglected lands.</p>
              
            <button type="button" className="head-btn">GET STARTED</button>
          </div>
        </header>
        {/* end of header */}
        {/* fullscreen modal */}
       
        {/* end of fullscreen modal */}
        {/* body content  */}
        <section className="services sec-width" id="services">
          <div className="title">
            <h2>services</h2>
          </div>
          <div className="services-container">
            {/* single service */}
            <article className="service">
              <div className="service-icon">
                <span>
                <FaGlobe />
                </span>
              </div>
              <div className="service-content">
                <h2>Find a Land</h2>
                <p>The main issue is that many people who like farming cannot afford to own land. If a 
                  cultivator needs a land for rent, 
                  it might be challenging for him to find available lands. So,from here you can find a suitable land area easily. Anyone interested 
                  in renting land only needs to get in touch with the owner to do so. </p>
                <button type="button" className="btn">Know More</button>
              </div>
            </article>
            {/* end of single service */}
            {/* single service */}
            <article className="service">
              <div className="service-icon">
                <span>
                  <FaPagelines />
                </span>
              </div>
              <div className="service-content">
                <h2>Rent your Land</h2>
                <p>You can rent your lands for agriculture from here. You can rent your lands for 
                  agriculture from here You can rent your lands for agriculture from here You can rent your
                   lands for agriculture from here You can rent your lands for agriculture from here You can rent 
                   your lands for agriculture from here</p>
                <button type="button" className="btn">Know More</button>
              </div>
            </article>
            {/* end of single service */}
            {/* single service */}
            <article className="service">
              <div className="service-icon">
                <span>
                <FaBalanceScale />
                </span>
              </div>
              <div className="service-content">
                <h2>Get legal info</h2>
                <p>You can get relevant legel information about land renting from here.You
                   can get relevant legel information about land renting from here.You can get 
                   relevant legel information 
                   about land renting from here.You can get relevant legel information 
                   about land renting from here.You can get relevant legel information about land renting from here.
                </p>
                <button type="button" className="btn">Know More</button>
              </div>
            </article>
            {/* end of single service */}
            {/* single service */}
            <article className="service">
              <div className="service-icon">
                <span>
                  < FaPlane />
                </span>
              </div>
              <div className="service-content">
                <h2>Exportation Guidelines</h2>
                <p>You can get Exportation Guidelines from here. All the relevant links will be available for you.You can get Exportation 
                  Guidelines from here. All the relevant links will be available for you.You can get Exportation Guidelines from here. 
                  All the relevant links will be available for you.</p>
                <button type="button" className="btn">Know More</button>
              </div>
            </article>
            {/* end of single service */}
          </div>
        </section>
        
          <div className="province">
            <table>
              <tbody><tr>
                  <td>
                    <div className="box">
                      
                      <img src={western} alt="western" />
                    </div>
                  </td>
                  <td>
                    <div className="box">
                      
                      <img src={central} alt="central" />
                    </div>
                  </td>
                  <td>
                    <div className="box">
                      
                      <img src={southern} alt="southern" />
                    </div>
                  </td>
                  <td>
                    <div className="box">
                      
                      <img src={northcentral} alt="northcentral" />
                      
                    </div>
                  </td>
                  <td>
                    <div className="box">
                     
                      <img src={eastern} alt="eastern" />
                      
                    </div>
                  </td>
                  <td>
                    <div className="box">
                      
                      <img src={uva} alt="uva" />
                      
                    </div>
                  </td>
                  <td>
                    <div className="box">
                      
                      <img src={sabara} alt="sabara" />
                      
                    </div>
                  </td>
                  <td>
                    <div className="box">
                      
                      <img src={northwestern} alt="northwestern" />
                      
                    </div>
                  </td>
                  <td>
                    <div className="box">
                      
                      <img src={northern} alt="northern" />
                      
                    </div>
                  </td>
                </tr>
              </tbody></table>
          </div>   
       
        {/* footer */}
        <footer className="footer">
          <div className="footer-container">
            <div>
              <h2>Useful Links</h2>
              <a href="https://www.srilankabusiness.com/">Sri Lanka Export Development Board</a>
              <a href="https://www.customs.gov.lk/business/exporting-goods/">Exporting Goods - Sri Lanka Customs</a>
              <a href="https://exporterssrilanka.net/">Exporters Association of Sri Lanka</a>
              <a href="https://simplebooks.com/srilanka/sri-lanka-customs-importers-and-exporters/">A guide for importers and exporters in Sri Lanka</a>
            </div>
            <div>
              <h2>Any Questions?</h2>
              <div className="contact-item">
              <div class ="contacticon">
              <span>
                <FaFacebookF />
                </span></div>
                
                <span>
                  AGRIMOE
                </span>
              </div>
              <div className="contact-item">
                <div class ="contacticon">
                <span>
                  <FaPhoneAlt />
                </span></div>
                
                <span>
                  +84545 37534 48
                </span>
              </div>
              <div className="contact-item">
              <div class ="contacticon">
                <span>
                  <FaEnvelope />
                </span> </div>
                
                <span>
                  agrimoe@gmail.com
                </span>
              </div>
            </div>
            {/* end of footer */}
          </div></footer></div>
    );
  };
export default Home;