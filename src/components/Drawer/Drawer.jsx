import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import close from "../../assets/img/close.svg";
import { Navbar } from "../Navbar";

export const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: { width: "100%" },
      }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box sx={{ padding: "2px" }}>
        <IconButton onClick={onClose} sx={{ padding: 0, marginLeft: "5px" }}>
          <img src={close} alt="close" />
        </IconButton>
        <Box sx={{ padding: "44px" }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  );
};
