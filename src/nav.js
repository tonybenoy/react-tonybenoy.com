import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import me from "./me.jpg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="tonybenoy" />
        <h1>Tony Benoy</h1>
        <p>
          A Pretentious Noob
          <span className="blink_text">_</span>
        </p>
        <div>
          <a href="https://www.linkedin.com/in/tonybenoy/">
            <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
          </a>
          <a href="https://twitter.com/TonyBenoy">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/tonybenoy">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://instagram.com/tonybenoy">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </header>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Work" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Blog" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        Work
      </TabPanel>
      <TabPanel value={value} index={2}>
        Blog
      </TabPanel>
    </div>
  );
}
