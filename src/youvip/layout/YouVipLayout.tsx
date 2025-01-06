import { Box, Toolbar } from "@mui/material";
import { ChildrenProps } from "../../interfaces/children.interface";
import { NavBar, SideBar } from "../components";

const drawerWidth = 200;

export const YouVipLayout = ({ children }: ChildrenProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
