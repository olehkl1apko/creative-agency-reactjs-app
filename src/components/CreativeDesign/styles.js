const styles = {
  creativeDesign: (theme) => ({
    padding: '60px 20px 88px',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '192px 20px',
    },
  }),
  wrapper: (theme) => ({
    [theme.breakpoints.up('md')]: {
      maxWidth: '1240px',
      alignItems: 'center',
      gap: '35px',
    },
  }),
  stack: (theme) => ({
    marginTop: '44px',
    gap: '44px',
    flexWrap: 'wrap',
    flexDirection: 'initial',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1240px',
      alignItems: 'center',
      gap: '15px',
    },
  }),
}

export default styles
