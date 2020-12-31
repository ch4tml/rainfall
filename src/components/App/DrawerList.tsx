import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faHome,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DrawerList = (): JSX.Element => {
  return (
    <List>
      <ListItem button key="home">
        <Link to="/">
          <Tooltip
            title="Home"
            aria-label="Home icon - click here to navigate home"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} />
            </ListItemIcon>
          </Tooltip>
        </Link>
        <Link to="/">
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem button key="station">
        <Link to="/station">
          <Tooltip
            title="Rainfall information"
            aria-label="Rainfall icon - click here to view rainfall information"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faCloudShowersHeavy} />
            </ListItemIcon>
          </Tooltip>
        </Link>
        <Link to="/station">
          <ListItemText primary="Station" />
        </Link>
      </ListItem>
      <ListItem button key="flood">
        <Link to="/flood">
          <Tooltip
            title="Flooding information"
            aria-label="Flooding icon - click here to view flooding information"
          >
            <ListItemIcon>
              <FontAwesomeIcon icon={faWater} />
            </ListItemIcon>
          </Tooltip>
        </Link>
        <Link to="/flood">
          <ListItemText primary="Flood" />
        </Link>
      </ListItem>
    </List>
  );
};

export default DrawerList;
