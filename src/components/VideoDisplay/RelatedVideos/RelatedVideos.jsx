import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default ({ videos }) => {
  const classes = useStyles();

  const relatedVideos = videos.map((video) => {
    return (
      <Card
        className={classes.root}
        key={video.id.videoId}
        style={{ marginBottom: "20px" }}
      >
        <Link
          to={`/video/${video.id.videoId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardActionArea>
            <img src={video.snippet.thumbnails.medium.url} alt="Video" />
            <CardContent>
              <Typography variant="body2" color="textPrimary" component="p">
                {video.snippet.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    );
  });

  return relatedVideos;
};
