import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ListArticle from "./ListArticle";
import Popullar from "./Popullar";
import Popullar1 from "./Popullar1";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    marginLeft: "4px",
    color: theme.palette.text.secondary
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    border: "2px"
  },

  container: {
    display: "flex",
    flexDirection: "row"
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

export default function() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs={4}>
          <img src="https://cdn-images-1.medium.com/fit/c/416/151/1*d89ICoVSNhjacGEyBBksxA.jpeg"></img>
          <div align="left">
            <h4>I hired a wife. and my career took off.</h4>

            <p>
              Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautifull.
              Last Fall, I hired her to take over to my longterm sister, who had
              move...
            </p>
            <p>
              Chirs Morgan <br />
              jun 18, 2018
            </p>
          </div>
        </Grid>

        <Grid item xs={3}>
          {articles.map(item => (
            <ListArticle
              title={item.title}
              subTitle={item.subTitle}
              infoDate={item.infoDate}
            />
          ))}
        </Grid>

        <Grid item xs={4}>
          <img src="https://cdn-images-1.medium.com/fit/c/416/151/1*d89ICoVSNhjacGEyBBksxA.jpeg"></img>
          <div align="left">
            <h4>I hired a wife. and my career took off.</h4>

            <p>
              Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautifull.
              Last Fall, I hired her to take over to my longterm sister, who had
              move...
            </p>
            <p>
              Chirs Morgan <br />
              jun 18, 2018
            </p>
          </div>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {articles.map(itemPopular => (
            <Popullar
              id={itemPopular.id}
              title={itemPopular.title}
              subTitle={itemPopular.subTitle}
              infoDate={itemPopular.infoDate}
            />
          ))}
          <Grid>
            <p>Help Status Writers Blog Careers</p>
            <p>Privacy Terms About</p>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          {articles.map(itemPopular1 => (
            <Popullar1
              image={itemPopular1.img}
              title={itemPopular1.title}
              subTitle={itemPopular1.subTitle}
              infoDate={itemPopular1.infoDate}
            />
          ))}
        </Grid>
      </Grid>
      <hr />
    </div>
  );
}
