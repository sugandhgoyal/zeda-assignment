import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    moviePage: {
      display: "flex",
      margin: 20
    },
    title: {
      marginTop: 0
    },
    img: {
      height: 310,
      width: "55%"
    },
    control: {
      padding: theme.spacing(2)
    },
    media: {
      height: 140
    },
    content: {
      marginLeft: "15px",
      display: "flex",
      flexDirection: "column"
    },
    textfield: {
      marginBottom: "20px"
    }
  })
);

export default function MoviePage(props) {
  const [movieData, setMovieData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    let imd = props.match && props.match.params.id;

    fetch(`http://www.omdbapi.com/?apikey=7a00f7df&i=${imd}`)
      .then(response => response.json())
      .then(data => {
        setMovieData(data);
      });
  }, [props.match]);

  return (
    <div className={classes.moviePage}>
      {movieData && (
        <>
          <img src={movieData.Poster} className={classes.img} alt="poster" />
          <div className={classes.content}>
            <h2 className={classes.title}>{movieData.Title}</h2>
            <div>
              <b>Rated:</b> {movieData.Rated}
            </div>
            <div>
              <b>Director:</b> {movieData.Director}
            </div>
            <div>
              <b>Actors:</b> {movieData.Actors}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
