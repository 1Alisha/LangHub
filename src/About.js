import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './About.css';
import Image from 'react-bootstrap/Image';

const About = ()=>{

    const reviews = [
        { rating: 5, text: 'I just had a conversation in French with a friend in France! I stumbled a bit, but we only used a transalor very rarely, and its because of LangHub.', reviewer: 'John Doe' },
        {rating: 4, text: 'Over a year with LangHub, I have seen remarkable progress, reaching an advanced level in English. This proficiency has empowered me to confidently engage with international clients in a professional as well as freelancing context.', reviewer: 'James Cooper'},
        { rating: 5, text: 'Best website for getting knowledge about various languages. Their guides and tutorials are very helpful and make one actually understand the language better.', reviewer: 'Jane Smith' },
        { rating: 5, text: 'My spouse is Indian, so I wanted to learn their language to communicate eaily. Over few months, I can now string small sentences together with the help of LangHub.', reviewer: 'Alice Johnson' },
        { rating: 4, text: 'LangHub is hands down the best language learning website for starting from scratch. I wholeheartedly recommend it, particularly if you are looking for a calm, interactive, and informative learning experience.', reviewer: 'Steve Evans'}
    ];


    return(
        <div id="about">
            <h1 className="about-h">Why LangHub?</h1>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Our Mission</h2>
                        <p>At LangHub, our mission is to make language learning an <br/>
                        enjoyable and enriching experience for individuals around <br/>
                        the globe. We believe that language is the key to understanding <br/>
                        diverse cultures and connecting with people worldwide.</p>
                        <button className="hbtn">View our Courses</button>
                    </Col>
                    <Col md={2}>
                        <Image src="a1.png" className="a1-img"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>What our learners are saying!</h2>
                        <Carousel showThumbs={false} showStatus={false}>
                        {reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="reviewer-info">
                                <div className="userimg"><img src="user.png" alt='user' className="review-img"/></div>
                                <div className="reviewer-details">
                                <div className="rating">
                                    {Array.from({ length: review.rating }, (_, i) => (
                                        <span key={i} role="img" aria-label="star">⭐</span>
                                    ))}
                                </div>
                                <p className="review-text">{review.text}</p>
                                <p className="reviewer-name">- {review.reviewer}</p>
                                </div>
                            </div>
                            </div>
                        ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;