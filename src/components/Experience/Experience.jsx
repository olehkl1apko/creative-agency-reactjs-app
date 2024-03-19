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
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={dashborad} sx={styles.imgItem} />
              <Typography sx={styles.contentTitle}>dashborad design</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={landing_page} sx={styles.imgItem} />
              <Typography sx={styles.contentTitle}>landing pages</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={ilustraton_page} sx={styles.imgItem} />
              <Typography sx={styles.contentTitle}>
                illustration design
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
