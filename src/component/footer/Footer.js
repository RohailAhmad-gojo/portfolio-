import { Grid , Typography , makeStyles } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react'
import { hover } from '@testing-library/user-event/dist/hover';

const useStyles = makeStyles((theme)=>({
    footer:{
       
       margin:"20px 0",
    },
    footerHeader:{
        display:"flex",
    },
    footerText:{
        fontFamily:"Montserrat",
        margin:"8px 40px",
        "&:hover":{
            backgroundColor:"#fff",
            color:"#000",
            cursor:"pointer ",
            borderRadius:"5px",
            fontWigth:"300",
        },
    },
    footerIcon:{
    // display:"flex",
    // justifyContent:"space-between"
    // marginLeft:"32%",
    },
    footerIcons:{
        padding:"5px",
        borderRadius:"50%",
        backgroundColor:"#fff",
        color:"#000",
        margin:"0 10px" ,
        fontSize:"2rem",
        "&:hover":{
            backgroundColor:"#000",
            color:"#fff",
            cursor:"pointer "
        }
    },
 
    
}))

function Footer() {
    const classes = useStyles();
  return (
    

    <div className={classes.footer}>
        <Grid container lg={11} justifyContent={'space-between'}>
        <div className={classes.footerHeader}> 
         <Typography variant="h6" className={classes.footerText}>Contact Us</Typography>
         <Typography variant="h6" className={classes.footerText}>Terms And Conditions</Typography>
         </div>
         <div className={classes.footerIcon} lg={6} md={6} sm={6} xs={6}>
         <TwitterIcon className={classes.footerIcons}/>
         <FacebookIcon className={classes.footerIcons}/>
         <InstagramIcon className={classes.footerIcons}/>
         <PinterestIcon className={classes.footerIcons}/>
         <YouTubeIcon className={classes.footerIcons}/>
         </div>
        </Grid>
      
    </div>
  )
}

export default Footer