
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradingIcon from '@mui/icons-material/Grading';
import ScienceIcon from '@mui/icons-material/Science';
import FunctionsIcon from '@mui/icons-material/Functions';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';








const education = () => {
  return (
    <>
    <div style={{backgroundColor:"#00CBA9"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,181.3C320,203,400,245,480,234.7C560,224,640,160,720,160C800,160,880,224,960,213.3C1040,203,1120,117,1200,80C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    {/* <div><center><h2>Education</h2></center></div> */}
    
        <Container style={{marginTop:"-4%", backgroundColor:"#00CBA9"}}>
          <Row>
            <Col>
                      <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* Word of the Day */}
                  </Typography>
                  <Typography variant="h5" component="div">
                     Graduation (B.tech) <br/>
                    
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* adjective */}
                  </Typography>
                  <Typography variant="body3">

                  <SchoolIcon/> JSS Academy of Technical Education Noida<br/>
                  <FmdGoodIcon/> Noida, Uttar Pradesh, India<br/>
                  <ComputerIcon/> Computer Science<br/>
                  <GradingIcon/> 7.5 SGPA<br/>
                  <CalendarMonthIcon/> August 2022<br/>
                  </Typography>
                </CardContent>
              </Card>
            </Col>


            <Col>
                        <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* Word of the Day */}
                  </Typography>
                  <Typography variant="h5" component="div">
                     Diploma <br/>
                    
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* adjective */}
                  </Typography>
                  <Typography variant="body3">

                  <SchoolIcon/> Government Popytechnic Lucknow<br/>
                  <FmdGoodIcon/> Lucknow, Uttar Pradesh, India<br/>
                  <ComputerIcon/> Information Technology<br/>
                  <GradingIcon/> 7.2 CGPA<br/>
                  <CalendarMonthIcon/> July 2019<br/>
                  </Typography>
                  </CardContent>
                  
                </Card>
            </Col>
          </Row>

          <Row style={{marginTop:"2%"}}>
            <Col>
                      <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* Word of the Day */}
                  </Typography>
                  <Typography variant="h5" component="div">
                     Intermediate<br/>
                    
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* adjective */}
                  </Typography>
                  <Typography variant="body3">

                  <SchoolIcon/> S.V.M Inter Collage<br/>
                  <FmdGoodIcon/> Lucknow, Uttar Pradesh, India<br/>
                  <FunctionsIcon/> Science->Maths<br/>
                  <GradingIcon/> 78 %<br/>
                  <CalendarMonthIcon/> 15 May 2016<br/>
                  </Typography>
                </CardContent>
                
              </Card>
            </Col>


            <Col>
                        <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* Word of the Day */}
                  </Typography>
                  <Typography variant="h5" component="div">
                     High School <br/>
                    
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {/* adjective */}
                  </Typography>
                  <Typography variant="body3">

                  <SchoolIcon/> S.V.M Inter Collage<br/>
                  <FmdGoodIcon/> Lucknow, Uttar Pradesh, India<br/>
                  <ScienceIcon/> Science<br/>
                  <GradingIcon/> 83 %<br/>
                  <CalendarMonthIcon/> 10 June 2014<br/>
                  </Typography>
                  </CardContent>
                  
                </Card>
            </Col>
          </Row>
          
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,181.3C320,203,400,245,480,234.7C560,224,640,160,720,160C800,160,880,224,960,213.3C1040,203,1120,117,1200,80C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
    </>
  )
}

export default education;