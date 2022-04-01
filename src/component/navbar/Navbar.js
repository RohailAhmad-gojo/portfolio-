import { Grid, isWidthDown, makeStyles, withWidth } from '@material-ui/core'
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'

// Elements styling starts here
const useStyles = makeStyles((theme)=>({
   root:{
     fontFamily:"Montserrat",
     fontSize:"1.5rem"
   },
    img:{
       marginTop:"20px",
       width:"60px",
   },
   
    btn:{
        padding:"5px 30px",
        border:"none",
        backgroundColor:"#000",
        color:"#fff",
        fontSize:"1.2rem",
        fontFamily:"Montserrat",
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"#fff",
            color:"#000",
            cursor:"pointer",
            fontWeight: "600",
            borderRadius:"5px",
        }

    },
    btnUp:{
        padding:"7px 30px",
        border:"1px solid #fff",
        borderRadius:"50px",
        backgroundColor:"black",
        color:"#fff",
        fontSize:"1.2rem",
        fontFamily:"Montserrat",
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"#fff",
            color:"#000",
            cursor:"pointer ",
            fontWeight: "600",

        }
    },
    navBarlist:{
        display:"flex"
    },
    navBarText:{
    },
}))
// Elements styling starts here

function Navbar() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container justifyContent='space-evenly'>
            <Grid item lg={11} sm={12}>
                <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item>
                <img src='./Assets/logo.png' alt="" className={classes.img}/>
            </Grid>
            <Grid item className={classes.navBarlist}>
                {/* <div>
                    <List>
                        <ListItem>
                            <ListItemText primary="Home" className={classes.navBarText}/>
                        </ListItem>
                    </List>
                </div> */}
                <div className={classes.btnContainer} lg={8} md={8} sm={8} xs={8}>
                    <button className={classes.btn}>Log In</button>
                    <button className={classes.btnUp}>Sign Up</button>
                </div>
            </Grid>
                </Grid>
            </Grid>
           
        </Grid>
    </div>
  )
}

export default Navbar