import React from 'react'
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import home2 from '../styles/home2.jpg';
import home1 from '../styles/home1.png';
import home3 from '../styles/home3.jpg';
import leaf from '../assets/images/leaf.png';
import approach from '../assets/images/approach.png';
import Form1 from '../shared/Form1.jsx';
import Testimonials from '../components/Testimonial/Testimonials';

const Home = () => {
    return <>
        <section className='home'>
            <Container className='home1'>
                <Row>
                    <Col className='mainContent'  >
                        <div className="hero__content">
                            <h1 className='quote'>Bussiness Consulting Firm </h1>
                            <h4 className='quote1'>A Boutique Consulting Firm that combines high ethical values with an enterpreneurial approach
                            to craft bold solutions.</h4><h4 className='quote1'> Our Strength is in our Experience, Expertise and Ethics.</h4>
                        </div>
                    </Col>
                   
                    
                </Row>
                <Row className='imgcontent'>
                <Col lg='4'>
                <div className="hero__img-box">
                    <img src={home1} alt="image1"/>
                </div>
            </Col>

            <Col lg='4'>
                <div className="hero__img-box " >
                    <img src={home2} alt="image2"/>
                </div>
            </Col>

            <Col lg='4'>
                <div className="hero__img-box ">
                    <img src={home3} alt="image3"/>
                </div>
            </Col>
            </Row>
            <Form1/>
            </Container>
        </section>

        {/*================= Testimonial Section start =================*/ }

<section className='home'>
    <Container>
      <Row>
      <Col xs="5">
      <img src={leaf} alt="leaf"  className='leaf'/>
      <h2 className='text-3'>Why Choose Us?</h2>
      <p className='text-1'>We use advanced diagnostics and analysis tools to better understand your industry, 
      market, and opportunities therein.</p>
      </Col>
      <Col className='col2'>
      <h2 className='text-2'>DIVERSE EXPERIENCED PROFESSIONALS</h2>
      <p className='text-1'> We are a diverse team of professional subject matter experts. 
      Every member is a professional in their field, and some are pioneers.
       Each member follows one of the most stringent codes of conduct and ethics in the consulting world.</p>
       <h3 className='text'> We are a Cut Above</h3>
       <p className='text-1'> We select our team members based on their ability to add real measurable value to our
        clients, our profession, and our team. Our team members are experts in their field with 
        designations such as CMC, LLM, MEd, MBA, OCT, OPC, BEd, CHRP, CPA/CFP (fmr), BSc, BBA, BFA, 
        ACE, BSE, BEng, PhD, BA, and MScM.</p>
        <h3 className='text'>We Create Value</h3>
        <p className='text-1'>If your business is led by one or more Women, Entrepreneurs, or New Immigrants,
         we offer a discount on all our services. Start-ups also receive a special rate,
          making our services more competitive, more accessible, and more valuable.</p>
      </Col>
      </Row>
      
      
      </Container>
</section>

<section  className='home'>
    <Container>
    <Row>
      <h1 className='text-4'>We Take an Entrepreneurial Approach to Consulting</h1></Row>
      <img src={approach} alt="approach"  className='approach'/>
    </Container>
</section>

        <section className='home'>
            <Container>
                <Row>
                    <Col lg="12" >
                        <h1 className='testimonial__title'>What we can do For you?</h1>
                    </Col>
                    <Col lg="12">
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section> 
        {/*================= Testimonial Section start =================*/ }          

    </>;
    
};

export default Home;