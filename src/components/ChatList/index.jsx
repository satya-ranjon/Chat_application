import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { CircleDashed } from "phosphor-react";
import React from "react";

const ChatList = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box
      sx={{
        boxShadow: "1px 0px 2px -1px rgba(0,0,0,0.25)",
        width: "41vh",
        height: "100vh",
        backgroundColor: theme.palette.background.chatlist,
      }}>
      <Stack p={2} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack
          alignItems={"center"}
          justifyContent="space-between"
          direction="row">
          <Typography variant="h5">Chats</Typography>
          <IconButton sx={{ width: "max-content" }}>
            <CircleDashed size={32} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatList;
