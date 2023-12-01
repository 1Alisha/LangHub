import React, {useState} from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Contact.css';
import Image from 'react-bootstrap/Image';

function Contact(){

    const [Data, setData] = useState({
        name: '',
        contact: '',
        lang: '',
        course: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...Data, [name]: value,});
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thankyou, we will contact you shortly!');
      };
    
      const langOptions = ['Hindi', 'English', 'French', 'Japanese', 'German', 'Italian', 'Korean', 'Arabic', 
      'Chinese', 'Russian', 'Turkish', 'Portugese', 'Dutch', 'Polish'];

      const courseOptions = ['Beginner', 'Intermediate', 'Advanced', 'Grammar', 'Specialized Skills', 'Kids and Youth'];


    return(
        <div id="contact" className="contact">
        <Container>
        <h1>Find the right tutor <br/> for you!</h1>
        <p>Tell us how you’d like to learn to get a personalized choice of tutors.</p><br/>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
              <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your Name..."
                  value={Data.name}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  placeholder="Enter your Contact No..."
                  value={Data.contact}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              </Row><br/>
              <Form.Group>
                <Form.Label>What do you want to learn?</Form.Label>
                <Form.Control
                  as="select"
                  name="lang"
                  value={Data.lang}
                  onChange={handleChange}
                >
                <option value="">-- Select a Language --</option>
                  {langOptions.map((lang, index) => (
                    <option key={index} value={lang}>
                      {lang}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group><br/>
              <Form.Group>
                <Form.Label>Which course do you prefer?</Form.Label>
                <Form.Control
                  as="select"
                  name="course"
                  value={Data.course}
                  onChange={handleChange}
                >
                <option value="">-- Select a Course --</option>
                  {courseOptions.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group><br/>
              <Form.Group>
                <Form.Label>Any special instruction or message?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Your Message..."
                  value={Data.message}
                  onChange={handleChange}
                />
              </Form.Group><br/>
              <Button type="submit">Get Started</Button>
            </Form>
          </Col>
          <Image src="c.jpg" className="cimg"/>
        </Row>
      </Container>
        </div>
    );
}

export default Contact;