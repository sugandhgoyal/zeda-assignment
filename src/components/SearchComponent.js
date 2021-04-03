import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      margin: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    },
    media: {
      height: 140
    },
    content: {
      marginBottom: "0.35em",
      fontSize: "16px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflowX: "hidden"
    },
    textfield: {
      marginBottom: "20px"
    }
  })
);

const SearchComponent = props => {
  const [searchString, setSearchString] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const classes = useStyles();

  const searchFunc = value => {
    let key = encodeURIComponent("q");
    let keyValue = encodeURIComponent(value);

    setSearchString(value);
    if (value && value.length > 2) {
      if (props.history && props.history) {
        var newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          `?${key}=${keyValue}`;
        window.history.pushState({ path: newurl }, "", newurl);
      }
      searchMovies(value);
    } else if (!value || (value && value.length < 2)) searchMovies([]);
  };

  const handleInputChange = event => {
    let value = event && event.target.value;
    searchFunc(value);
  };

  useEffect(() => {
    if (props.history) {
      setSearchString(props.history.location.search.replace("?q=", ""));
      searchFunc(props.history.location.search.replace("?q=", ""));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const searchMovies = searchString => {
    fetch(`https://www.omdbapi.com/?apikey=7a00f7df&s=${searchString}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.Error) {
          setError(data && data.Error);
        } else setMovies(data.Search);
      });
  };

  return (
    <div className={classes.wrapper}>
      <TextField
        placeholder="Search.."
        value={searchString}
        onChange={handleInputChange}
        id="outlined-basic"
        label="Search Movies"
        variant="outlined"
        className={classes.textfield}
      />
      {error && !movies && <div>{error}</div>}
      <Grid container className={classes.root} spacing={2}>
        {movies &&
          movies.length > 0 &&
          movies.map(value => (
            <Grid item xs={6} sm={4} lg={3}>
              <Card
                className={classes.root}
                onClick={() =>
                  props.history && props.history.push(`/movie/${value.imdbID}`)
                }
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={value.Poster}
                    title={value.Title}
                  />
                  <CardContent>
                    <Typography
                      className={classes.content}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {value.Title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default SearchComponent;
