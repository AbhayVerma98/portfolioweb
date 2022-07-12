import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgc from '../images/c++.jpg';
import img5 from '../images/5.jpg';
import JS from '../images/javascript.jpg';
import img4 from '../images/4.jpg';
import img3 from '../images/3.jpg';
import img2 from '../images/2.jpg';
import img1 from '../images/1.jpg';



const certificate = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,192L40,165.3C80,139,160,85,240,101.3C320,117,400,203,480,234.7C560,267,640,245,720,202.7C800,160,880,96,960,101.3C1040,107,1120,181,1200,224C1280,267,1360,277,1400,282.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

      <Container>

          <Row>
            <Col xs><img src={imgc} alt="" height="105%" width="80%"/></Col>
            <Col xs><img src={JS} alt="" height="105%" width="80%"/></Col>
            <Col xs><img src={img5} alt="" height="105%" width="80%"/></Col>
          </Row>
          <Row style={{marginTop:"6%"}}>
            <Col xs><img src={img3} alt="" height="85%" width="80%"/></Col>
            <Col xs><img src={img2} alt="" height="85%" width="80%"/></Col>
            <Col xs><img src={img4} alt="" height="85%" width="80%"/></Col>
          </Row>
          <Row style={{marginTop:"2%"}}>
            <Col xs><img src={img1} alt="" height="85%" width="80%"/></Col>
            <Col xs></Col>
            <Col xs></Col>
          </Row>

      </Container>
        
    </>
  )
}

export default certificate;