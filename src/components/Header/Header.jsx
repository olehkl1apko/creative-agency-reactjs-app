import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";

import { Navbar, Drawer } from "../../components";
import { logo_desk, logo_mob, burger_menu } from "../../assets/img";

import styles from "./styles";

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography component="a" href="/" sx={styles.logoDesk}>
            <img src={logo_desk} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <img src={burger_menu} alt="burger menu" />
            </IconButton>
          </Box>
          <Typography component="a" href="/" sx={styles.logoMob}>
            <img src={logo_mob} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
