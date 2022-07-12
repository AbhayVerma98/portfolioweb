import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const skill = () => {
  return (
    <><div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,256L0,192L1440,192L1440,0L0,0L0,0Z"></path></svg>

        <center>
            <div style={{marginTop:"-6%"}}><h1>Skills</h1></div>
        </center>
        <br/>



        <div >
        <center >
               <div style={{width:"65%"}}>
               <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>C++</text><ProgressBar animated now={84} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>

            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>Python</text><ProgressBar animated now={63} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>



            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>Django</text><ProgressBar animated now={70} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>

            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>JavaScript</text><ProgressBar animated now={55} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>



            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>React Js</text><ProgressBar animated now={65} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>

            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>HTML</text><ProgressBar animated now={90} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>



            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>CSS</text><ProgressBar animated now={75} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>

            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>BootsTrap</text><ProgressBar animated now={67} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>



            <Card sx={{ minWidth: 275,  marginRight:""}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>MySQL</text><ProgressBar animated now={80} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card>
            <br/>

            {/* <Card sx={{ minWidth: 275,  marginRight:"18%"}}>
              <CardContent>
                <Typography variant="body2" style={{textAlign:"left"}}>
                <span>
                  <span><text>c++</text><ProgressBar animated now={45} style={{width:"40rem"}} /></span>
                </span>
                </Typography>
              </CardContent>            
            </Card> */}
            <br/>
               </div>
        </center>
      
      </div>

    </div>
    </>
  )
}

export default skill;