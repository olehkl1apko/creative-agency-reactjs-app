import {
  Box,
  MuiCard,
  CardActions,
  CardContent,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";

import { arrow_right } from "../../assets/img";
import styles from "./styles";

const cardList = [
  {
    id: 1,
    name: "product management",
  },
  {
    id: 2,
    name: "mpv definition",
  },
  {
    id: 3,
    name: "product strategy",
  },
];

export const Card = ({ title, imgSrc }) => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component="img" src={imgSrc} />
        <Typography variant="h3">{title}</Typography>
        <List>
          {cardList.map((item) => (
            <ListItem sx={styles.listItem} key={item.id}>
              <Box
                component="img"
                src={arrow_right}
                sx={{ marginRight: "3px" }}
              />
              {item.name}
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={styles.btn}>
          Read More
          <Box component="img" src={arrow_right} />
        </Button>
      </CardActions>
    </MuiCard>
  );
};
