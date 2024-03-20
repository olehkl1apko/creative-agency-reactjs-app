import { Box, Typography, Link, Grid } from "@mui/material";

import { dashborad, landing_page, ilustraton_page } from "../../assets/img";
import styles from "./styles";

const links = [
  "Show all",
  "Design",
  "Branding",
  "Development",
  "SEO",
  "UX/UI Design",
];

const cards = [
  { title: "dashborad design", src: dashborad },
  { title: "landing pages", src: landing_page },
  { title: "illustration design", src: ilustraton_page },
];

export const Experience = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">professional experience</Typography>
        <Box sx={styles.links}>
          {links.map((link, index) => {
            return (
              <Link key={index} sx={styles.link}>
                {link}
              </Link>
            );
          })}
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {cards.map(({ title, src }) => (
            <Grid key={title} item xs={6} sm={4} md={4}>
              <Box>
                <Box component="img" src={src} sx={styles.imgItem} />
                <Typography sx={styles.contentTitle}>{title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
