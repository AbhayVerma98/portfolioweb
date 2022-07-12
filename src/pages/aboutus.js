import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./aboutus.css";
import imga from '../images/AA.jpg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';








const Aboutus = () => {


  
  


  return (
    <>
    <div style={{backgroundColor:"#A2D9FF"}}>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,197.3C320,181,400,139,480,138.7C560,139,640,181,720,213.3C800,245,880,267,960,240C1040,213,1120,139,1200,122.7C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
    {/* <h1> About us</h1> */}
    <Container style={{marginTop:"%"}} >
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row >
            
              <Col xs={6} md={4} style={{backgroundColor:"", marginTop:"3%"}}>


              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      sx={{overflow:"hidden"}}
        avatar={ 
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            AV
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Abhay Verma"
        subheader="Febuary 10, 1998"
      />
      <CardMedia
        component="img"
        height="194"
        image={imga}
        alt="Paella dish"
        sx={{marginTop:"10%", paddingBlock:""}}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h5>FullStack web-developer</h5>
          <h6>B.Tech in Computer Science || 2022</h6>
          <h6>Diploma in Information Technology || 2019</h6>
        </Typography>
      </CardContent>
      
    </Card>





                
              </Col>





              <Col xs={12} md={8} style={{marginTop:"3%"}}>
              <Container>
                  <Row>
                    <Col>
                          <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {/* Word of the Day */}
                            </Typography>
                            <Typography variant="h5" component="div">
                              Experience
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {/* adjective */}
                            </Typography>
                            <Typography variant="body2">
                              <h5>Fresher</h5>
                              Search in an opportunity <br/>
                              which help to boost my career
                            
                              {/* {'"a benevolent smile"'} */}
                            </Typography>
                          </CardContent>
                          {/* <CardActions>
                             <Button size="small">Learn More</Button> 
                          </CardActions> */}
                          </Card>
                    </Col>

                    <Col>
                    <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {/* Word of the Day */}
                            </Typography>
                            <Typography variant="h5" component="div">
                              Skills
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {/*  */}
                            </Typography>
                            <Typography variant="body2">
                              <ul>
                                    <Row>
                                      <Col xs={4}><li>DSA in C++</li></Col>
                                      <Col xs={4}><li>Python</li></Col>
                                      <Col xs={4}><li>Django</li></Col>
                                    </Row>
                                    <Row>
                                      <Col xs={4}><li>JavaScripy</li></Col>
                                      <Col xs={4}><li>React Js</li></Col>
                                      <Col xs={4}><li>Material UI</li></Col>
                                    </Row>
                                    <Row>
                                      <Col xs={4}><li>HTML</li></Col>
                                      <Col xs={4}><li>CSS</li></Col>
                                      <Col xs={4}><li>BootsTrap</li></Col>
                                    </Row>
                                
                              </ul>
                            
                              {/* {'"a benevolent smile"'} */}
                            </Typography>
                          </CardContent>
                          {/* <CardActions>
                            <Button size="small">Learn More</Button>
                          </CardActions> */}
                          </Card>
                    </Col>
                  </Row>


<br/>
                  <Row>
                    <Col>
                          <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {/* Word of the Day */}
                            </Typography>
                            <Typography variant="h5" component="div">
                              Projects
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {/* adjective */}
                            </Typography>
                            <Typography variant="body2">
                              Worked on 10+ projects
                                <li>5 projects on Django</li>
                                <li>2 projects on Python</li>
                                <li>2 projects on React JS</li>
                                <li>2 projects on JavaScript</li>
                              
                              {/* {'"a benevolent smile"'} */}
                            </Typography>
                          </CardContent>
                          {/* <CardActions>
                            <Button size="small">Learn More</Button>
                          </CardActions> */}
                          </Card>
                    </Col>
                   

                    <Col className='mar'>
                    <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {/* Word of the Day */}
                            </Typography>
                            <Typography variant="h5" component="div">
                            Certificates
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {/* adjective */}
                            </Typography>
                            <Typography variant="body2">
                             
                            <Row>
                              <Col xs={5}><li>Python</li></Col>
                              <Col xs={5}><li>Django</li></Col>
                            </Row>
                            <Row>
                              <Col xs={5}><li>C++</li></Col>
                              <Col xs={5}><li>JavaScript</li></Col>
                            </Row>
                            <Row>
                              <Col xs={5}><li>BootsTrap</li></Col>
                              
                            </Row>
                            <br/>
                                                   


                              <br />
                              {/* {'"a benevolent smile"'} */}
                            </Typography>
                          </CardContent>
                          {/* <CardActions>
                            <Button size="small">Learn More</Button>
                          </CardActions> */}
                          </Card>
                    </Col>
                  </Row>




  
              </Container>
              </Col>
      </Row>
  </Container>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,181.3C320,203,400,245,480,234.7C560,224,640,160,720,160C800,160,880,224,960,213.3C1040,203,1120,117,1200,80C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
  </div>
    </>
  )
}
export default Aboutus;


