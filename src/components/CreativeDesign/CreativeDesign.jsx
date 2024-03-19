import { Typography, Stack, Box } from "@mui/material";

import styles from "./styles";
import { strategy_svg, design_svg, development_svg } from "../../assets/img";
import { Card } from "../Card";

const data = [
  { title: "Strategy", svg: strategy_svg },
  { title: "Product design", svg: design_svg },
  { title: "Development", svg: development_svg },
];

export const CreativeDesign = () => {
  return (
    <Box sx={styles.creativeDesign}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">creative design solutions</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", margin: "25px 0" }}
        >
          professional deign agency to provide solutions
        </Typography>
        <Stack sx={styles.stack}>
          {data.map(({ title, svg }) => {
            return <Card title={title} imgSrc={svg} key={title} />;
          })}
        </Stack>
      </Box>
    </Box>
  );
};
