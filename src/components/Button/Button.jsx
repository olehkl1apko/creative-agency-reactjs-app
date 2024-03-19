import MuiButton from "@mui/material/Button";

import { styles } from "./styles";

export const Button = ({ children, type = "button" }) => {
  return (
    <MuiButton type={type} sx={styles.btn}>
      {children}
    </MuiButton>
  );
};
