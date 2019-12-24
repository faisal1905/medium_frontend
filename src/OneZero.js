import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import ContenZero from "./ContenZero";
import Detail from "./Detail"


import { typography } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const articles = [
  {
    
    id: 1,
    title: "11 Unusual Tips for How to Wake Up Earlyl",
    subTitle: "George Halachev in Better Humans",
    infoDate: "10 Des - 6min read",
    img:
      "https://cdn-images-1.medium.com/fit/c/416/151/1*d89ICoVSNhjacGEyBBksxA.jpeg"
      
  },
  {
    id: 2,
    title: "11 Unusual Tips for How to Wake Up Earlyl",
    subTitle: "George Halachev in Better Humans",
    infoDate: "10 Des - 6min read",
    img:
      "https://cdn-images-1.medium.com/fit/c/416/151/1*d89ICoVSNhjacGEyBBksxA.jpeg"
  },
  {
    id: 3,
    title: "11 Unusual Tips for How to Wake Up Earlyl",
    subTitle: "George Halachev in Better Humans",
    infoDate: "10 Des - 6min read",
    img:
      "https://cdn-images-1.medium.com/fit/c/416/151/1*d89ICoVSNhjacGEyBBksxA.jpeg"
  },
  {
    id: 4,
    title: "11 Unusual Tips for How to Wake Up Earlyl",
    subTitle: "George Halachev in Better Humans",
    infoDate: "10 Des - 6min read",
    img:
      "https://cdn-images-1.medium.com/fit/c/416/151/1*d89ICoVSNhjacGEyBBksxA.jpeg"
  }
];
export default function OneZero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Grid item xs="11px" weidht="220px">
              <img src="https://miro.medium.com/max/400/1*cw32fIqCbRWzwJaoQw6BUg.png"></img>
              <b style={{ color: "#6A0BFF" }}>The front lines of the future.</b>{" "}
              A Medium publication about tech and science.
            </Grid>
            <Grid item xs="1px" align="right">
              <Button variant="outlined" color="primary" floated="right">
                Follow
              </Button>
            </Grid>
          </Paper>
        </Grid>

        <Grid container>
          <Grid item xs={7}>
            <img
              src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
              width="900px"
              height="400px"
            ></img>
          </Grid>
          <Grid item xs={5} style={{ background: "#6A0BFF" }}>
            <typography
              style={{ fontSize: "26px", lineheight: "30px" }}
              align="center"
            >
              <b>The Influencer and the Hit Man</b>
            </typography>
            <typography style={{ fontSize: "16px", lineheight: "20px" }}>
              <p>
                How a years-long domain name fued ended in a bloody shootout
              </p>
            </typography>
            <typography>
              <p>Ian frisch</p>
              <p>Desc 10 . 24 min read</p>
            </typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={5} style={{ background: "#6A0BFF" }}>
            <typography
              style={{ fontSize: "26px", lineheight: "30px" }}
              align="center"
            >
              <b>The Influencer and the Hit Man</b>
            </typography>
            <typography style={{ fontSize: "16px", lineheight: "20px" }}>
              <p>
                How a years-long domain name fued ended in a bloody shootout
              </p>
            </typography>
            <typography>
              <p>Ian frisch</p>
              <p>Desc 10 . 24 min read</p>
            </typography>
          </Grid>

          <Grid item xs={7}>
            <img
              src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
              width="900px"
              height="400px"
            ></img>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={7}>
              
                <img
                  src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
                  width="900px"
                  height="400px"
                ></img>
              
            </Grid>
            <Grid item xs={5} style={{ background: "#6A0BFF" }}>
              <typography
                style={{ fontSize: "26px", lineheight: "30px" }}
                align="center"
              >
                <b>The Influencer and the Hit Man</b>
              </typography>
              <typography style={{ fontSize: "16px", lineheight: "20px" }}>
                <p>
                  How a years-long domain name fued ended in a bloody shootout
                </p>
              </typography>
              <typography>
                <p>Ian frisch</p>
                <p>Desc 10 . 24 min read</p>
              </typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={5} style={{ background: "#6A0BFF" }}>
              <typography
                style={{ fontSize: "26px", lineheight: "30px" }}
                align="center"
              >
                <b>The Influencer and the Hit Man</b>
              </typography>
              <typography style={{ fontSize: "16px", lineheight: "20px" }}>
                <p>
                  How a years-long domain name fued ended in a bloody shootout
                </p>
              </typography>
              <typography>
                <p>Ian frisch</p>
                <p>Desc 10 . 24 min read</p>
              </typography>
            </Grid>
            <Grid item xs={7}>
              <img
                src="https://miro.medium.com/max/2767/1*jOvu1hK1XTrBswWU7hHcMg.jpeg"
                width="900px"
                height="400px"
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid align="center" style={{ backgroundColor: "yellow" }}>
        <p>
          <b>We have a few new things to sahre."</b>"
        </p>
        <p style={{ paddingBottom: "20px" }}>-Damon Beres</p>
        <p>"Wellcome to a Refreshed OneZero"</p>
        <p>Dec 3 . 2 min read</p>
      </Grid>

      <Grid align="right" style={{ width: "" }}>
        {articles.map(items => (
          <ContenZero
            image={items.img}
            title={items.title}
            subTitle={items.subTitle}
            infoDate={items.infoDate}
          />
        ))}
      </Grid>
      <Grid>
        <div style={{ allign: "right" }}>
          About OneZero . About Medium . Terms . Privacy
        </div>
      </Grid>
    </div>
  );
}
