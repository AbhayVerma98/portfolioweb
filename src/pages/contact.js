import React from 'react'
import './contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';










const Contact = () => {
  return (
    <>
    <div >
      <div className='contactheading' >
        <span className="ch"><h1><center><br/>Contact Us</center></h1></span>
      </div>

    </div>
    <br/>
    <br/>
  
        <Container >
            <Row>
              <Col>
              <Card sx={{ minWidth: 275 }} >
                <CardContent>
                  
                  
                  
                  <Typography variant="body2">
                  <EmailIcon/> av542323@gmail.com<br/><br/>
              <PhoneIcon/> 6387455053<br/><br/>
              <LinkedInIcon/> LinkedIn<br/><br/>
              <GitHubIcon/> GitHub<br/><br/>
              <form action="mailto:av542323@gmail.com" method="post" enctype="text/plain">
                Name:<input type="text" name="name"/><br/><br/>
                E-mail:<input type="text" name="mail"/><br/><br/>
                Comment:<br/>
                <textarea type="text" name="comment" rows="4" cols="50" placeholder='Enter message here'>
                  
                  </textarea>
                  <br/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
              </form>
                  </Typography>
                </CardContent>
                
              </Card>
              



              </Col>

              <Col>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  
                  
                  
                  <Typography variant="body2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.579687683807!2d80.9647914684617!3d26.883020219131122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd585e3d476f%3A0xc8d2aaeb6a2a3f9!2sLiberty%20Colony%20Park%2C%20Sarvodaya%20Nagar%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1656228215066!5m2!1sen!2sin" 
               width="80%" height="400rem" title='Address' ></iframe>
                  </Typography>
                </CardContent>
                
              </Card>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.579687683807!2d80.9647914684617!3d26.883020219131122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd585e3d476f%3A0xc8d2aaeb6a2a3f9!2sLiberty%20Colony%20Park%2C%20Sarvodaya%20Nagar%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1656228215066!5m2!1sen!2sin" 
               width="80%" height="400rem" ></iframe> */}
              </Col>
            </Row> 
        </Container>
      <div>
        
      </div>
      
    </>
  )
}

export default Contact