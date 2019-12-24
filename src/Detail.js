import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import ContenZero from "./ContenZero";
import TwitterIcon from "@material-ui/icons/Twitter";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FacebookIcon from "@material-ui/icons/Facebook";
import { render } from "@testing-library/react";
import { IconButton } from "@material-ui/core";
import Related from "./Related"
import Fouter from './Fouter'

const useStyles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  }
});

 class Detail extends Component {
  render() {
    const {classes} = this.props
    return (
      <div>
        <NavBar />
        <Grid>
          <Grid item xs={12}>
            <img
              src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
              width="100%"
              height="100%"
            ></img>
            <div align="center">Ilustration : cam floyd</div>
          </Grid>

          <Grid item xs={8} style={{ margin: "0px 500px 0px 500px" }}>
            <div align="center">
              <h1>The Influencer and the Hit Man</h1>
              <h3>
                How a years-loong domain name fued ended in a bloody shootout
              </h3>
            </div>
            <Grid Container spacing={1}>
              <Grid item xs={2} align="left">
                <div style={{ width: "100px" }}>
                  <Avatar src="simpsons.png" />
                </div>
              </Grid>
              <Grid item xs={7}>
                <div>
                  <p>Hommer simpsons</p>

                  <Button variant="outlined" color="primary" align="center">
                    FOLLOW
                  </Button>
                </div>
                <div>Dec 10 - 24 min read</div>
              </Grid>

              <Grid item xs={4} align="right">
                <TwitterIcon />
                <FacebookIcon />
                <BookmarkBorderIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} style={{ margin: "0px 300px 0px 300px" }}>
            <Grid>
              <p>
                <b>
                  When Ethan Deyo’s small, sandy-haired dog cocked his head and
                  perked up his ears, Deyo knew something was wrong. Deyo
                  stepped out of the second-floor office of his Cedar Rapids,
                  Iowa, home and peered down the stairs. That’s when he saw a
                  man with a gun standing in his foyer, and he began to
                  understand the peril he was in. “Come here, motherfucker!”
                  Deyo remembered the man screaming, pointing a gun at him. The
                  gunman wore a baseball cap, had pantyhose pulled over his
                  face, and sunglasses covered his eyes. Deyo briefly raised his
                  arms in surrender — then bolted into his bedroom. He slammed
                  the door behind him and braced for impact. Moments later, the
                  intruder kicked through the doorway and grabbed Deyo by the
                  neck. “Where’s your computer?” he demanded. According to
                  Deyo’s courtroom testimony, he led the man across the hall and
                  into his office with the gun now shoved into the small of his
                  back. He sat down, the man opened up his MacBook Pro, and Deyo
                  felt the gun move from his spine to the rear of his skull, the
                  metal hard on his scalp.
                </b>
                <img
                  src="https://miro.medium.com/max/1200/1*B_t5PJiEX5buGvk3FJ0aFg.jpeg"
                  width="100%"
                  height="100%"
                ></img>
              </p>
            </Grid>
          </Grid>
          <Grid>
            <img
              src="https://miro.medium.com/max/2400/1*lHjlpTEqsJHwGuKJaYTUeQ.png"
              width="100%"
              height="100%"
            ></img>
          </Grid>

          <Grid item xs={8} style={{ margin: "0px 300px 0px 300px" }}>
            <Paper>
              <div>
                <Button variant="contained">Internet Culture</Button>
                <Button variant="contained">Social Media</Button>
                <Button variant="contained">Domains</Button>
                <Button variant="contained">Digital Life</Button>
                <Button variant="contained">Goddaddy</Button>
              </div>
              <Grid item xs={12}>
                <div style={{ width: "100%" }}>
                  <IconButton>
                    <Avatar src="https://static.thenounproject.com/png/1085294-200.png" />
                  </IconButton>
                  3,4K Claps
                  <Grid style={{ width: "100%" }} align="right">
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton>
                      <BookmarkBorderIcon />
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </Grid>
                </div>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={8} style={{ margin: "0px 300px 0px 300px" }}>
            <Grid
              container="flex"
              style={{ marginLeft: "10px", marginRight: "10%" }}
            >
              <Grid container>
              <paper>
                <div>
                  <Grid>
                  <IconButton
                    align="left"
                    style={{ height: "10%", width: "10%" }}
                  >
                    <Avatar
                      style={{ width: "100%", height: "100%" }}
                      src="simpsons.png"
                    />
                  </IconButton>
                    </Grid>
                    
                  <Grid style={{ marginInlineEnd: "100px" }}>WRITTEN BY</Grid>
                
                    <b>Hommer Simpsons</b>
                    <p>
                      Hommer Simpsons is Conten Creator,associate professor in
                      Science and Technology Studies at University College
                      London. @jackstilgoe
                    </p>
                    <div align="right">
                      <Button variant="outlined" color="primary">
                        FOLLOW
                      </Button>
                    </div>
                 
                  
                </div>
              </paper>
              </Grid>

              <paper>
                <div>
                  <IconButton
                    align="left"
                    style={{ height: "10%", width: "10%" }}
                  >
                    <Avatar
                      style={{ width: "100%", height: "100%" }}
                      src="simpsons.png"
                    />
                  </IconButton>
                  <p style={{ marginInlineEnd: "100px" }}>WRITTEN BY</p>
                  <p>
                    <b>Hommer Simpsons</b>
                    <p>
                      Hommer Simpsons is Conten Creator,associate professor in
                      Science and Technology Studies at University College
                      London. @jackstilgoe
                    </p>
                    <div align="right">
                      <Button variant="outlined" color="primary">
                        FOLLOW
                      </Button>
                    </div>
                  </p>
                  <p></p>
                </div>
              </paper>
              <paper>
                <Button variant="outlined" color="primary" style={{width:"900px" , height:"70px"}} href="./Coment">
                  See responses (16)
                </Button>
              </paper>
            </Grid>

            <Grid>
              <paper>
                <p> <b>
                  MORE FROM MEDIUM
                </b>
              </p>
              
              
              </paper>
            </Grid>
          </Grid>
        </Grid>
        <Related />
        <Fouter/>
      </div>
    );
  }
}

export default withStyles()(Detail)