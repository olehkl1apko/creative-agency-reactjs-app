import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

import DropDown from "./DropDown";

import { styles } from "./styles";

export const BtnNav = ({ page }) => {
  return (
    <>
      {page.arrow ? (
        <DropDown page={page} />
      ) : (
        <Link
          component={NavLink}
          to={page.link}
          sx={styles.btnLink}
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
        >
          {page.title}
        </Link>
      )}
    </>
  );
};
