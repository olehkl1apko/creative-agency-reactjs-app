export const styles = {
  contactUs: (theme) => ({
    padding: "44px 20px",
    textAlign: "left",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      padding: "50px 20px",
    },
  }),
  wrapper: (theme) => ({
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1240px",
      display: "flex",
      alignItems: "center",
      gap: "120px",
    },
  }),
  info: (theme) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    },
  }),
  form: (theme) => ({
    maxWidth: "613px",
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
    },
  }),
  imgInfo: {
    width: "16px",
    height: "16px",
    mr: "4px",
  },
  titleInfo: (theme) => ({
    color: `${theme.palette.slateBlue.main}`,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
  }),
  titleValue: {
    color: "#000000",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    marginTop: "3px",
  },
  itemBlockInfo: {
    marginBottom: "24px",
    flex: 1,
  },
  input: (theme) => ({
    display: "flex",
    gap: "25px",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
  }),
  textField: (theme) => ({
    width: "300px",

    "& input::placeholder": {
      fontSize: "20px",
      lineHeight: "20px",
    },
    [theme.breakpoints.up("xs")]: { width: "100%" },
  }),
  photo: {
    width: "100%",
    margin: "44px auto 0",
    maxWidth: "508",
    display: "block",
  },
  textareaAutosize: {
    margin: "24px 0",
    padding: "12px",
    width: "100%",
    fontSize: "20px",
    lineHeight: "20px",
    border: "0.5px solid #777FEB",
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
  },
};
