import { Grid , makeStyles, Typography} from '@material-ui/core'
import React from 'react'

const useStyles =makeStyles((theme)=>({
  heading:{
      fontSize:"3.4rem",
      color: "#fff",
      fontWeight:"bold",
      fontFamily:"Montserrat",
      textTransform:"uppercase",
      fontWeight:"bold",
      marginTop:"50px",
      marginBottom:"50px"
      
  },
  headingPara:{
    lineHeight: "37px",
    color: "#fff",
    fontFamily:"Montserrat",
    fontWeight: "400",
    marginTop: "30px",
},
secOneimg:{
    width:"100%",
    justifyContent:"flex-end",
},
secOnepara:{
    lineHeight: "37px",
    color: "#fff",
    fontFamily:"Montserrat",
    fontWeight: "400",
    marginTop: "30px",
},
secTwoimg:{
    marginTop:"50px",
    width:"100%",

},


}))

function Secone() {
    const classes = useStyles();
  return (
    <div>
        <Grid container justifyContent='center'>
          <Grid item lg={11}>
              <Grid container justifyContent='space-between'  alignItems='center' wrap="wrap-reverse">
              <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography variant="h3" className={classes.heading} lg={10} md={10} sm={12} xs={12}>
                the hom-nft <br/> minting app
              </Typography>
              <Typography variant='p' className={classes.headingPara}>Le Lorem Ipsum est simplement d
              u faux de texte. Il n'a pas fait que survivre cin bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en
               page de texte, comme Aldus PageMaker.

</Typography>
                
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridOne}>
                <img src='./Assets/simple2.png' alt="" className={classes.secOneimg}/>
                <br/>
                <Typography variant='p' className={classes.secOnepara}>Mint and bont an NFT</Typography>
              </Grid>
      
              </Grid>



              <Grid container justifyContent='space-between' alignItems='flex-end' >
              <Grid item lg={5} md={5} sm={12} xs={12} >
                <img src='./Assets/simple.png' alt="" className={classes.secTwoimg} />
                <br/>
                <Typography variant='p' className={classes.secOnepara}>Mint and bont an NFT</Typography>

              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography variant='p' className={classes.headingPara}>Le Lorem Ipsum est simplement d
              u faux de texte. Il n'a pas fait que survivre cin bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en
               page de texte, comme Aldus PageMaker.

</Typography>
                
              </Grid>
              </Grid>
          </Grid>
        </Grid>
    </div>
  )
}

export default Secone