import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';

const footer = () => {
  return (
      <>
        
        <center>
        <div style={{height:"6rem", backgroundColor:"blue", }}>
        {/* <div style={{height:"6rem", backgroundColor:"blue"}} className='con'> */}
        <span style={{ padding:"5%"}}><Link href="https://www.linkedin.com/in/abhay-verma-924210163/" ><LinkedInIcon sx={{fontSize: 55, color: "blue", backgroundColor:"white", borderRadius:"45%", margin:"1.7%"}} /></Link></span>
        <span style={{ padding:"5%"}}><Link href="https://github.com/AbhayVerma98" ><GitHubIcon sx={{fontSize: 55, color: "black", backgroundColor:"white", borderRadius:"45%",  margin:"1.7%"}} /></Link></span>
        <span style={{ padding:"5%"}}><Link href="https://twitter.com/AbhayVe58274181"><TwitterIcon sx={{fontSize: 55, color: "blue", backgroundColor:"white", borderRadius:"45%",  margin:"1.7%"}} /></Link></span>
        </div>
        </center>
        
      </>
  )
}

export default footer;