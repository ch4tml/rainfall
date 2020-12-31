import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    breadcrumbs: {
      display: "flex",
      alignItems: "right",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      color: "#fff",
    },
  })
);

interface breadcrumbMap {
  display: string;
  ariaLabel: string;
}

const breadcrumbNameMap: { [key: string]: breadcrumbMap } = {
  flood: {
    display: "Flood",
    ariaLabel: "Navigation breadcrumb - flood",
  },
  station: {
    display: "Station",
    ariaLabel: "Navigation breadcrumb - station",
  },
};

const NavBreadcrumbs = (): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();
  const pathArray = location.pathname.substring(1).split("/");

  return (
    <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
      {pathArray.map((path, index) => {
        console.log(path);
        if (path === "") {
          return undefined;
        }
        const breadcrumbDetail: breadcrumbMap = breadcrumbNameMap[path];
        return (
          <Typography
            align="right"
            color={index === pathArray.length - 1 ? "inherit" : "initial"}
            key={`${path}-${index}`}
          >
            <span aria-label={breadcrumbDetail.ariaLabel}>
              {breadcrumbDetail.display}
            </span>
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default NavBreadcrumbs;
