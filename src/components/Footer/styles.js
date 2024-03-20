export const styles = {
  footer: (theme) => ({
    maxWidth: '1240px',
    padding: '44px 20px',
    textAlign: 'left',
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      padding: '88px 20px',
    },
  }),
  gridWrapper: (theme) => ({
    padding: '44px 0px',
    borderTop: `0.5px solid ${theme.palette.slateBlue.main}`,
    borderBottom: `0.5px solid ${theme.palette.slateBlue.main}`,
    rowGap: '24px',
    [theme.breakpoints.up('lg')]: {
      padding: '88px 0px',
    },
  }),
  linkTitle: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
  },
  title: (theme) => ({
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '29px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '48px',
      lineHeight: '59px',
    },
  }),
  text: (theme) => ({
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '28px',
    marginTop: '24px',
    color: '#000000',
    textTransform: 'capitalize',
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '28px',
    },
  }),
  paper: {
    p: '8px',
    display: 'flex',
    alignItems: 'center',
    background: '#F5F5F5',
    borderRadius: '8px',
    boxShadow: 'none',
    marginTop: '20px',
  },
  btn: (theme) => ({
    background: `${theme.palette.slateBlue.main}`,
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#fff',
    p: '12px',
    width: '131px',
  }),
  itemList: {
    p: '12px 0',
    color: '#686868',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
  },
  subscribeFooter: (theme) => ({
    width: '100%',
    maxWidth: '372px',
    [theme.breakpoints.up('lg')]: {
      width: '372px',
    },
  }),

  icon: {
    width: '16px',
    height: '16px',
    color: '#777FEB',
  },
  emailBlock: (theme) => ({
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
  inputBase: {
    ml: 1,
    flex: 1,
    '& input::placeholder': {
      fontSize: '20px',
      lineHeight: '20px',
    },
  },
}

export default styles
