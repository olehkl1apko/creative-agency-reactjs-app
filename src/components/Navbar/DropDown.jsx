import { useState } from "react";
import { Button } from "@mui/material";

import arrow from "../../assets/img/chevron-down.svg";
import { styles } from "./styles";
import { SubMenu } from "./Submenu";

export default function BasicMenu({ page }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  return (
    <div>
      <Button
        disableRipple
        id="basic-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={(evt) => {
          setAnchorEl(evt.currentTarget);
        }}
        sx={styles.btnLink}
      >
        {page.title} <img src={arrow} alt="arrow" />
      </Button>
      <SubMenu
        anchorEl={anchorEl}
        isOpen={isOpen}
        onClose={() => setAnchorEl(null)}
      />
    </div>
  );
}
