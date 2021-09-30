import React from "react";
// import Drawer from "@mui/material/Drawer";
import { Drawer } from "@mui/material";

const MyDrawer = ({ toggle, setToggle, children }) => {
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={toggle}
      onClose={() => setToggle(!toggle)}
    >
      {children}
    </Drawer>
  );
};

export default MyDrawer;
