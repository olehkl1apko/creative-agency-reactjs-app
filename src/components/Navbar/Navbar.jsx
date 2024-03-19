import { Box } from "@mui/material";

import { BtnNav } from "./BtnNav";

const pages = [
  { title: "Demos", arrow: false, link: "/demos" },
  { title: "Services", arrow: false, link: "/services" },
  { title: "Pages", arrow: false, link: "/pages" },
  { title: "Portfolio", arrow: true },
  { title: "Blog", arrow: true },
  { title: "Contact", arrow: false, link: "/contact" },
];

export const Navbar = () => {
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}
    >
      {pages.map((page) => (
        <BtnNav page={page} key={page.title} />
      ))}
    </Box>
  );
};
