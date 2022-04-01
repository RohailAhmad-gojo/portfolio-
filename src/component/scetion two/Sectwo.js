import { Grid , Typography , makeStyles} from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
 secTwoimg:{
   width:"230px",
 },
 secTwo:{
     heigth:"100px 0",
 },
 secTwo:{
    //  margin:"1rem"
 },
 secTwoheader:{
     marginTop:"5rem",
     marginLeft:"4rem"
 },
 secTwohead:{
     color:"#acadac",
     fontWeight:"600",
     letterSpacing:"5px"
 },

 imageSec:{
     marginBottom: "2rem"
 },
 secondDiv:{
     paddingTop:"80px",
     background:"#1085AA",
     marginLeft:"4rem",
     borderTopLeftRadius:"2rem",
 },
 secTwopara:{
     margin:"20px 0",
     textTransform:"uppercase",
     fontSize:"1rem",
     fontFamily:"Montserrat",
     fontWeight:"500"
 },
 secTwotext:{
    lineHeight: "22px",
    color: "#fff",
    fontFamily:"Montserrat",
    fontWeight: "200",
    marginTop: "50px",
 },
 secTwolast:{
   marginLeft:"2rem"
 },
 imgBG:{
     width:"100%",
     marginTop:"10rem",
 }


}))
function Sectwo() {
const classes = useStyles();
  return (
    <div>
    <div className={classes.secTwoheader}>
   <Typography variant="h3" className={classes.secTwohead}>How It Work</Typography>
   </div> 
        <div className={classes.secondDiv}>
        <Grid container justifyContent='space-around' className={classes.secTwo}>
            <Grid item sm={10} md={10} lg={3} xs={10} justifyContent="space-between">
               
               <div className={classes.imageSec}>
               <img src='./Assets/simple4.png' alt="" className={classes.secTwoimg}/>
               </div>
                <Typography variant='h5' className={classes.secTwopara}>step 1 : register with the DAO</Typography>
                <Typography variant='p' className={classes.secTwotext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet 
</Typography>
               
          

            </Grid>
           
            <Grid item sm={10} md={10} lg={3} xs={10} justifyContent="space-between">
               
               <div className={classes.imageSec}>
               <img src='./Assets/simple5.png' alt="" className={classes.secTwoimg}/>
               </div>
                <Typography variant='h5' className={classes.secTwopara}>step 2 : Update The Meta-data </Typography>
                <Typography variant='p' className={classes.secTwotext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
</Typography>
               
          

            </Grid> <Grid item sm={10} md={10} lg={3} xs={10}justifyContent="space-between">
               
               <div className={classes.imageSec}>
               <img src='./Assets/simple3.png' alt="" className={classes.secTwoimg}/>
               </div>
                <Typography variant='h5' className={classes.secTwopara}>step 3 : Mint Your HOM-NFT </Typography>
                <Typography variant='p' className={classes.secTwotext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
</Typography>

            </Grid>
            <img src='./Assets/simple6.png' alt='' className={classes.imgBG} />
        </Grid>
       
        </div>
    </div>
     
  )
}

export default Sectwo