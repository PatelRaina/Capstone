import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./footer.css"
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.PNG';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between  border-bottom'>
       
        
      </section>

      <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} className="section2"> 
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <div className="logo">
                        <img src={logo} className="imgfooter"/>
                        <span className='titlefooter'>The Big Leaf</span>
                    </div>
              </h6>
              <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i className="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i className="ri-github-fill"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i className="ri-twitter-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i className="ri-linkedin-box-fill"></i></Link>
                            </span> 
                        </div>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h5 className='footertitle'>Useful links</h5>
              <p>
                <a href='https://thebigleaf.com/frequently-asked-questions/' className='textfooter'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='https://thebigleaf.com/privacy/' className='textfooter'>
                  Privacy
                </a>
              </p>
              <p>
                <a href='https://thebigleaf.com/the-big-leafs-driven-team/' className='textfooter'>
                  About US
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='footertitle'>Contact Us</h6>
              
              <p className='textfooter'>
              <i className="ri-mail-line"></i>&nbsp;
              <a href="mailto:thebigleaf@gmail.com" className="link"> thebigleaf@gmail.com </a>
              </p>
              <p className='textfooter'>
              <i className="ri-phone-line"></i><a href="tel:(437)881-1606"> +1 (416)884-8033</a>
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='footercopyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 The Big Leaf
        
      </div>
    </MDBFooter>
  );
}