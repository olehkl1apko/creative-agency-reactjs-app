import { Menu, MenuItem } from "@mui/material";

export const SubMenu = ({ anchorEl, isOpen, onClose }) => {
  const submenu = [
    { id: 1, title: "Profile" },
    { id: 2, title: "My account" },
    { id: 3, title: "Logout" },
  ];

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
