import { Divider, useTheme } from "@mui/material";
import { ChatCircleDots, Users, Phone, Gear } from "phosphor-react";

export const sidBar = [
  { id: 0, url: "chat", icon: <ChatCircleDots size={30} /> },
  { id: 1, url: "friend", icon: <Users size={30} /> },
  { id: 2, url: "call", icon: <Phone size={30} /> },
  {
    id: 3,
    divider: true,
  },
  { id: 4, url: "setting", icon: <Gear size={30} /> },
];
export const sidBar1 = [1, 2, 3, 4];
