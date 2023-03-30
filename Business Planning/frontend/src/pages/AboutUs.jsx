import React from 'react'
import '../styles/aboutus.css';
import {Container, Row, Col} from 'reactstrap';
import rahi_img from '../assets/images/Rahi.jpg';
import agostino_img from '../assets/images/Agostino.jpg';
import lou_img from '../assets/images/Lou.jpg';
import ronald_img from '../assets/images/Ronald.jpg';
const AboutUs = () => {
    return <>
        <div>
        <hr></hr>
           <p className='abouttitle'> Meet The Big Leaf Team </p>
           <hr></hr>
           <div className='context'>
            <h2 className='text'>We are diverse professional consultants and subject matter experts</h2>
            </div>    
            <Row>
            <Col lg="4">
            <a href="https://www.linkedin.com/in/tajzadeh/">
            <img src={rahi_img} alt="Rahi image" className='consultants' />
            </a>
            <div className='info'>
            <h3>Rahi S. Tajzadeh</h3>
            <h3>CMC MScM BComm</h3>
            <h4>President</h4>
            </div>
            </Col>
            <Col>
            <p className='about'>Mr. Tajzadeh can help your business with Strategy Development, Investor / Investment Readiness,
            Opportunity Spotting, Validation, Data Room Development, Business Planning, Pitching, 
            Forecasting / Financial Projections, and Executive Coaching.</p>
            <p className='about'>Mr. Tajzadeh is a Certified Management Consultant, Master of Science in Management,
            and a Bachelor of Commerce specializing in strategy, research, and entrepreneurship. With a background in entrepreneurship,
             consulting, and research, he brings a unique perspective and set of tools to better identify opportunities, craft strategy, 
             and execute.</p>  
            <p className='about'>Mr. Tajzadeh has been coaching, advising, and mentoring business leaders, 
            entrepreneurs, and students for more than two decades. As a former Personal Training Specialist,
            he used his knowledge to empower clients to better understand their bodies, create realistic goals, 
            and to meet and exceed them! As a mentor at several incubators including the prestigious Hatchery
            at The University of Toronto, Mr. Tajzadeh coached entrepreneurs in Business Planning, Value Proposition
            Development, Pitching and Professional Presentations, Innovation, and Leadership.</p>
            </Col>
            </Row>

            <hr></hr>

            <Row>
            <Col lg="4">
            <a href="https://www.linkedin.com/in/agostinomenna/">
            <img src={agostino_img} alt="Agostino image" className='consultants' />
            </a>
            <div className='info'>
            <h3>Dr. Agostino Menna</h3>
            <h3>PhD MBA BA</h3>
            <h4>Vice President: Business Development</h4>
            </div>
            </Col>
            <Col>
            <p className='about'>Dr. Agostino Menna can help your business with Strategy Development, Investor / Investment Readiness,
             Funding Support, Business Planning, Research and Analysis, Validation, Valuation, Workshops and Training,
              Forecasting / Financial Projections, Black Swan Consulting, and Executive Coaching.</p>
            <p className='about'>Dr. Agostino Menna, is a principal co-founder of the education technology start-up KnowQuest.net,
             Dr. Menna has many years of experience as a professor of Economics and Entrepreneurship, academic research, and family business. 
             He has held various academic positions at Toronto Metropolitan University, Bishop’s University, Brock University, and Niagara University.</p>
            <p className='about'>Dr. Menna has decades of entrepreneurship experience both as an advisor and as a family business owner in the Niagara Falls
             region of Ontario, Canada. He has mentored entrepreneurs for more than 18 years, helped start-up acquire funding, helped small businesses 
             improve their value proposition, and businesses of all sizes gain a competitive advantage in their respective industries.</p>  
            </Col>
            </Row>

            <hr></hr>

            <Row>
            <Col lg="4">
            <a href="https://www.linkedin.com/in/louvescio/">
            <img src={lou_img} alt="Lou image" className='consultants' />
            </a>
            <div className='info'>
            <h3>Lou Vescio</h3>
            <h3>MEd OCT OPC BA BEd</h3>
            <h4>Vice President: Leadership Development</h4>
            </div>
            </Col>
            <Col>
            <p className='about'>Mr. Vescio can help your business with Leadership Coaching and Training, Employee /
             Management Training and Workshops, Business Improvement, Change Management, Strategy Development,
              and Government Relations.</p>
            <p className='about'>As an Education Leader, Executive Coach, and Community Development Leader,
             Mr. Vescio applies his extensive knowledge and experiences in education and corporate environments to ensure 
             start-ups and established businesses receive the support and tools necessary to grow and succeed in the evolving 
             global business environment.</p>
            <p className='about'>Best known for his ‘coach approach’ to leadership and training, Mr. Vescio specializes 
            in the delivery of training and educational programs focusing on skill acquisition and talent management,
             as well as effective strategies and solutions for learners, educators, job seekers, employers, businesses, 
             and community organizations.</p>  
            </Col>
            </Row>

            <hr></hr>

            <Row>
            <Col lg="4">
            <a href="https://www.linkedin.com/in/ron-mcmeeken-89369526/">
            <img src={ronald_img} alt="Lou image" className='consultants' />
            </a>
            <div className='info'>
            <h3>Ronald McMeeken</h3>
            <h3>CPA CFP (fmr.)</h3>
            <h4>Treasurer</h4>
            </div>
            </Col>
            <Col>
            <p className='about'>Mr. McMeeken can help your business with Accounting Services, Strategy Development, Forecasting / 
            Financial Projections, Financial Analyses and Diagnostics, and Executive Coaching.</p>
            <p className='about'>Mr. McMeeken is a seasoned finance and accounting expert, executive, and entrepreneur.
             He has spent 70 years working with organizations large and small, from IBM to start-ups, and from pre-revenue
              to mergers and acquisitions, Ron has seen and done it all. He has helped businesses raise funds, grow and expand,
               as well as keeping their books up to date and on track for reporting.</p>
            <p className='about'>Mr. McMeeken has years of entrepreneurial experience as a small business owner, and advisor/mentor
             to start-ups and small and medium enterprises for the last five decades. His knowledge base is extensive as he maintains 
             an active and growing base of clientele for accounting services, while consistently acting as advisor and board member for 
             small and medium enterprises.</p>  
            </Col>
            </Row>
        </div>
    </>
}

export default AboutUs;