import React from "react";
import Typography from "@material-ui/core/Typography";
import { Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default ({
  id,
  title,
  description,
  thumbnail,
  publishedAt,
  channelTitle,
}) => {
  return (
    <Grid justify="center" container spacing={1}>
      <Grid item xs={12}>
        <Paper
          variant="outlined"
          square
          style={{ display: "flex", alignItems: "center", padding: "5px" }}
        >
          <Link
            to={`/video/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="video__thumbnail" style={{ marginRight: "25px" }}>
              <img src={thumbnail} alt="Video" />
            </div>
          </Link>
          <div className="video__info" style={{ textAlign: "left" }}>
            <Link
              to={`/video/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component="p"
              style={{ marginTop: "8px" }}
            >
              {channelTitle}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};
