import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  // Switch,
  useTheme,
} from "@mui/material";
import React from "react";
import { sidBar } from "../../data";
import logo from "../../assets/Image/logo.png";
import avatar from "../../assets/Image/avatar.png";
import SideBarIconButton from "./SideBarIconButton";
import useSettings from "../../hooks/useSettings";
import { ChatCircleDots, IconContext } from "phosphor-react";
import ThemeSwitch from "./ThemeSwitch";

const SideBar = () => {
  const theme = useTheme();

  const { onToggleMode } = useSettings();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.sidebar,
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
              <React.Fragment key={el.id}>
                <Divider
                  sx={{
                    width: 70,
                    backgroundColor: theme.palette.primary.grey,
                  }}
                />
              </React.Fragment>
            ) : (
              <SideBarIconButton url={el.url} icon={el.icon} key={el.id} />
            );
          })}
        </Stack>

        <Stack spacing={4} alignItems="center" pb={3}>
          <ThemeSwitch
            checked={theme.palette.mode === "dark"}
            size="medium"
            onChange={onToggleMode}
          />
          <Avatar src={avatar} sx={{ width: 56, height: 56 }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
