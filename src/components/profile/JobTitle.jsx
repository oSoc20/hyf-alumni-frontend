import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const JobTitle = () => {
  const classes = useStyles();
  const [jobTitle, setJobTitle] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <h2>Job Title</h2>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={jobTitle}
            onChange={handleChange}
          >
            <MenuItem value={10}>FullStack</MenuItem>
            <MenuItem value={20}>Frontend</MenuItem>
            <MenuItem value={30}>Backend</MenuItem>
            <MenuItem value={40}>Design</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </div>
  );
};

export default JobTitle;
