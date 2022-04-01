import { Grid, Typography , makeStyles} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
  secThree:{
    marginTop:"15px",
    paddingBottom:"20px",
    background: "#5127cf",
    marginRight:"6rem",
    borderTopRightRadius:"2rem",
    borderBottomRightRadius:"2rem",
  },
  secThreeheader:{
    margin:"50px 0",
    fontFamily:"Montserrat",
    fontWeight:"400",
  },
  secThreetext:{
    // marginBottom:"30px",
    fontFamily:"Montserrat",
    fontSize:"4rem",
    fontWeight:"500",
  },
  secThreeink:{
   margin:"60px 20px",
  },
  secThreetexts:{
    marginBottom:"10px",
    fontSize:"2rem",
    fontFamily:"Montserrat",
    fontWeight:"400",
  },
  secThreepara:{
    fontFamily:"Montserrat",
    fontWeight:"200",
  }
}))

function SecThree() {

  const classes = useStyles();
  return (
    <div className={classes.secThree} lg={12} sm={12} md={12} xs={12}>
        <Grid container justifyContent='space-evenly'>
            <Grid item sm={12} md={12} lg={11} justifyContent="center">
                    <Typography variant="h3" className={classes.secThreeheader}>5 reasons why you want to make a HOM-NFT of your property</Typography>
                    
            </Grid>
        </Grid>
        <Grid container  justifyContent="center" className={classes.secThreeink}>
            <Grid lg={1} xs={12} sm={2} md={2}><Typography variant='h4' className={classes.secThreetext}>01</Typography></Grid>
            <Grid lg={8} xs={8} sm={8} md={8}><Typography variant='h5'className={classes.secThreetexts}>Bond your HOM-NFT and receive token in reture</Typography>
            <Typography variant='p' className={classes.secThreepara}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</Typography></Grid>
          </Grid>
          

          <Grid container lg={11} md={11} sm={11} xs={11} justifyContent="center" className={classes.secThreeink}>
            <Grid lg={1} xs={12} sm={2} md={2}><Typography variant='h4' className={classes.secThreetext}>02</Typography></Grid>
            <Grid lg={8} xs={8} sm={8} md={8}><Typography variant='h5'className={classes.secThreetexts}>Stake your HOM token to passive income</Typography>
            <Typography variant='p' className={classes.secThreepara}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</Typography></Grid>
          </Grid>
          

          <Grid container lg={11} md={11} sm={11} xs={11} justifyContent="center" className={classes.secThreeink}>
            <Grid lg={1} xs={12} sm={2} md={2}><Typography variant='h4' className={classes.secThreetext}>03</Typography></Grid>
            <Grid lg={8} xs={8} sm={8} md={8}><Typography variant='h5'className={classes.secThreetexts}>Rent your property for crypot</Typography>
            <Typography variant='p' className={classes.secThreepara}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</Typography></Grid>
          </Grid>
          

          <Grid container lg={11} md={11} sm={11} xs={11}justifyContent="center" className={classes.secThreeink}>
            <Grid lg={1} xs={12} sm={2} md={2} ><Typography variant='h4' className={classes.secThreetext}>04</Typography></Grid>
            <Grid lg={8} xs={8} sm={8} md={8}><Typography variant='h5'className={classes.secThreetexts}>Sell your property without the hassle</Typography>
            <Typography variant='p' className={classes.secThreepara}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</Typography></Grid>
          </Grid>
          

          <Grid container lg={11} md={11} sm={11} xs={11}justifyContent="center" className={classes.secThreeink}>
            <Grid lg={1} xs={12} sm={2} md={2} ><Typography variant='h4' className={classes.secThreetext}>05</Typography></Grid>
            <Grid lg={8} xs={8} sm={8} md={8}><Typography variant='h5'className={classes.secThreetexts}>Double your passive income</Typography>
            <Typography variant='p' className={classes.secThreepara}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</Typography></Grid>
          </Grid>
          

          
          
    </div>
  )
}

export default SecThree