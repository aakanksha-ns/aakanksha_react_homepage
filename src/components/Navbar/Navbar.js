import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
import './Navbar.css';

const PATHVALUES = {
  HOME: 0,
  PROJECTS: 1,
  RESUME: 2
};

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(21),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 10
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    paddingBottom: '20px',
    paddingTop: '20px',
    backgroundColor: 'black'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  let initialTabValue = 0;

  switch (window.location.pathname) {

    case '/':
      initialTabValue = PATHVALUES.HOME;
      break;
    case "/projects":
    case '/javascript30':
      initialTabValue = PATHVALUES.PROJECTS;
      break;
    case "/resume":
      initialTabValue = PATHVALUES.RESUME;
      break;
    default:
      initialTabValue = PATHVALUES.HOME;
  }

  const [value, setValue] = React.useState(initialTabValue);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="HOME" to="/" component={Link}>
          </StyledTab>
          <StyledTab label="PROJECTS" to="/projects" component={Link} />
        </StyledTabs>
      </div>
    </div>
  );
}