import { Menu, MenuItem } from "@mui/material";

const submenu = [
  { id: 1, title: "Profile" },
  { id: 2, title: "My account" },
  { id: 3, title: "Logout" },
];

export const SubMenu = ({ anchorEl, isOpen, onClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {submenu.map((item) => (
        <MenuItem key={item.id} onClick={onClose}>
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  );
};
