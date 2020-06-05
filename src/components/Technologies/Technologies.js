import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Technologies = ({ primary = [], secondary = [] }) => {
  const fullArray = [...primary, ...secondary];
  const classes = useStyles();
  return (
    <>
      {fullArray.map((tool) => (
        <Chip
          key={tool}
          className={classes.chip}
          label={tool}
          variant="outlined"
        />
      ))}
    </>
  );
};

export default Technologies;
