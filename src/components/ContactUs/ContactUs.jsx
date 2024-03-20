import { Box, Typography } from "@mui/material";
import { MailOutline, LocalPhone } from "@mui/icons-material";

import { styles } from "./styles";
import photo_send from "../../assets/img/photo_send_2.png";
import { FormComponent } from "./FormComponent";

export const ContactUs = () => {
  return (
    <Box sx={styles.contactUs}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <Typography variant="h2">mind! contact us</Typography>
          <Typography variant="body1">
            Our managers will contact you asap
          </Typography>
          <Box sx={styles.info}>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <MailOutline sx={styles.imgInfo} />
                email us
              </Box>
              <Box sx={styles.titleValue}>support@gmail.com</Box>
            </Box>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <LocalPhone sx={styles.imgInfo} />
                phone us
              </Box>
              <Box sx={styles.titleValue}>+012 (345) 67 89</Box>
            </Box>
          </Box>
          <FormComponent />
        </Box>
        <Box>
          <Box component="img" src={photo_send} sx={styles.photo} />
        </Box>
      </Box>
    </Box>
  );
};
