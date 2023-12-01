import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from 'react-bootstrap/Image';
import Language from './Language';

function Homepage(){
    return (
        <div id="home">
          <Container>
            <Row>
              <Col>
                <h1 className="h">Language Learning<br/>for the real-world</h1>
                <p className="p">Anyone can learn words but LangHub teaches you <br/> to build 
                sentences, nail pronunciation and speak<br/> with confidence.</p>
                <button className="hbtn">Learn for Free</button>
              </Col>
              <Col>
                <Image src="h.png" className="himg"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Language />
              </Col>
            </Row>
          </Container>
    
        </div>
    );
}

export default Homepage;