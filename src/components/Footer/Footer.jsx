import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  Paper,
  InputBase,
  Button,
  Grid,
} from "@mui/material";

import { Instagram, Twitter, Facebook } from "@mui/icons-material";
import { behince, medium, dribble } from "../../assets/img";

import styles from "./styles";

const services = [
  "UX/UI Design",
  "web development",
  "SEO Optimization",
  "product design",
  "logo design",
  "brand design",
];

const links = [
  "about agency",
  "latest news & blog",
  "meet the team",
  "popular services",
  "testimonials",
  "need a Career?",
];

const follow = [
  { title: "dribble", img: dribble },
  { title: "instagram", img: <Instagram sx={styles.icon} /> },
  { title: "twitter", img: <Twitter sx={styles.icon} /> },
  { title: "behince", img: behince },
  { title: "facebook", img: <Facebook sx={styles.icon} /> },
  { title: "medium", img: medium },
];

export const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={styles.gridWrapper}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              services
            </Typography>
            <List>
              {services.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              links
            </Typography>
            <List>
              {links.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              follow
            </Typography>
            <List>
              {follow.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {typeof item.img === "string" ? (
                      <Box component="img" src={item.img} />
                    ) : (
                      item.img
                    )}
                    <Box component="span" sx={{ marginLeft: "5px" }}>
                      {item.title}
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={styles.emailBlock}>
          <Box sx={styles.subsribeFooter}>
            <Typography variant="h3" sx={styles.title}>
              subscribe our newsletter
            </Typography>
            <Typography sx={styles.text}>
              Lorem ipsum dolor sit amet,{" "}
              <Link sx={{ color: "#777FEB" }}> consectetur adipiscing </Link>
              elit.consectetur. psum dolor sit am psum dolor sit am.{" "}
            </Typography>
            <Paper component="form" sx={styles.paper}>
              <InputBase sx={styles.inputBase} placeholder="Email address" />
              <Button sx={styles.btn}>sign up</Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
