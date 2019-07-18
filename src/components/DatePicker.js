import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function DatePickers(props) {
  const classes = useStyles();
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Select a date"
        type="date"
        defaultValue={`${y}-${m}-${d}`}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
