import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        height: "50px",
        width: "25ch",
      },
    },
    button: {
      backgroundColor: "#840000",
    },
  })
);

const CssTextField = withStyles({
  root: {
    "& label, & input": {
      color: "#840000",
      fontWeight: "800",
    },
    "& label.Mui-focused": {
      color: "#840000",
      borderWidth: "3px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& input": {
        color: "#840000",
      },
      "& fieldset": {
        borderColor: "#840000",
        borderWidth: "3px",
      },
      "&:hover fieldset": {
        borderColor: "#840000",
        borderWidth: "3px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#840000",
        borderWidth: "3px",
      },
    },
  },
})(TextField);

interface SearchBarProps {
  label: string;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const classes = useStyles();
  const [postcode, setPostcode] = useState<string>("");

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const newValue = e.currentTarget.value;

    setPostcode(newValue);
  };
  const onClick = (e: React.MouseEvent<HTMLElement>): void => {
    alert(postcode);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <CssTextField
        id="outlined-basic"
        label={props.label}
        onChange={onChange}
        variant="outlined"
      />
      <Button
        className={classes.button}
        color="primary"
        onClick={onClick}
        variant="contained"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
