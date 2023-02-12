import PropTypes from "prop-types";
import { IconButton, useTheme } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarIconButton = ({ url, icon }) => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const theme = useTheme();
  return (
    <Link to={url}>
      <IconButton
        disableRipple
        sx={{
          width: "max-content",
          borderRadius: 1.5,
          color: `${
            path === url ? theme.palette.text.light : theme.palette.text.primary
          }`,
          backgroundColor: `${path === url && theme.palette.primary.main}`,
          "&:hover": {
            backgroundColor: `${path !== url && theme.palette.hover.btn}`,
          },
          transition: ".5s",
        }}>
        {icon}
      </IconButton>
    </Link>
  );
};

SideBarIconButton.propTypes = {
  el: PropTypes.objectOf(
    PropTypes.shape({
      url: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
};

export default SideBarIconButton;
