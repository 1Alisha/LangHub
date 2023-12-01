import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Courses.css';
import Image from 'react-bootstrap/Image';

function Courses(){
    return (
        <div id="courses">
            <h1>Explore our courses</h1>
            <p>Have a look at our free online courses and <br/>choose according to your requirements!</p>
            <Container>
          <Row>
            <Col className="catalog-cell">
              <Image src="ca1.jpg" className="catalog-image" />
              <h5>Beginner</h5>
              <p>Basic courses designed for learners with little or no prior knowledge of the language.</p>
              <a href='#courses'>MORE</a>
            </Col>
            <Col className="catalog-cell">
                <Image src="ca2.png" className="catalog-image" />
                <h5>Intermediate</h5>
                <p>Courses targeting learners with some foundational knowledge of the language.</p>
                <a href='#courses'>MORE</a>
            </Col>
            <Col className="catalog-cell">
              <Image src="ca3.jpg" className="catalog-image" />
              <h5>Advanced</h5>
              <p>For learners who already have quite solid grasp of the language.</p>
              <a href='#courses'>MORE</a>
            </Col>
          </Row>

          <Row>
            <Col className="catalog-cell">
              <Image src="ca4.jpg" className="catalog-image" />
              <h5>Grammar</h5>
              <p>In-depth courses dedicated to mastering the intricacies of grammar rules and structures.</p>
              <a href='#courses'>MORE</a>
            </Col>
            <Col className="catalog-cell">
                <Image src="ca5.png" className="catalog-image" />
                <h5>Specialized Skills</h5>
                <p>Courses that focus on specific skills, like writing, reading, listening or pronunciation.</p>
                <a href='#courses'>MORE</a>
            </Col>
            <Col className="catalog-cell">
              <Image src="ca6.jpg" className="catalog-image" />
              <h5>Kids and Youth</h5>
              <p>Courses designed specifically for younger learners, engaging content suitable for children.</p>
              <a href='#courses'>MORE</a>
            </Col>
          </Row>

        </Container>
        </div>
    );
}

export default Courses;