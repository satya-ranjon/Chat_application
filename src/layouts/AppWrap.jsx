import { Box } from "@mui/material";
import React from "react";
import ChatList from "../components/ChatList";
import SideBar from "../components/SideBar";

const AppWrap = () => {
  return (
    <Box justifyItems="start" display="flex">
      <SideBar />
      <ChatList />
    </Box>
  );
};

export default AppWrap;
