import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Switch,
  useTheme,
} from "@mui/material";
import React from "react";
import { sidBar } from "../../data";
import logo from "../../assets/Image/logo.png";
import avatar from "../../assets/Image/avatar.png";
import { Link, useParams, useLocation } from "react-router-dom";

const SideBar = () => {
  const theme = useTheme();

  const { pathname } = useLocation();
  const path = pathname.slice(1);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: "14vh",
      }}>
      <Stack
        alignItems="center"
        py={3}
        justifyContent="space-between"
        sx={{ height: "100%" }}>
        <Stack alignItems="center" spacing={4}>
          <IconButton
            disableRipple
            size="large"
            sx={{
              height: 64,
              width: 64,
              borderRadius: 1.5,
              backgroundColor: "#AFBBF7",
            }}
            p={1}>
            <img src={logo} alt="" style={{ width: "100%" }} />
          </IconButton>
          {sidBar.map((el) => {
            return el.divider ? (
              <React.Fragment key={el.id}>{el.divider}</React.Fragment>
            ) : (
              <Link to={el.url} key={el.id}>
                <IconButton
                  disableRipple
                  sx={{
                    width: "max-content",
                    borderRadius: 1.5,
                    color: `${path === el.url && "#fff"}`,
                    backgroundColor: `${
                      path === el.url && theme.palette.primary.main
                    }`,
                  }}>
                  {el.icon}
                </IconButton>
              </Link>
            );
          })}
        </Stack>

        <Stack spacing={4} alignItems="center" pb={3}>
          <Switch size="medium" />
          <Avatar src={avatar} sx={{ width: 56, height: 56 }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
