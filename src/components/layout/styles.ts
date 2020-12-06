import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../constants';

export const getFooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#202F42',
      height: '22.5rem',

      [theme.breakpoints.up('sm')]: {
        height: '12.75rem',
      },

      [theme.breakpoints.up('md')]: {
        height: '7.5rem',
      },
    },
    container: {
      display: 'flex',
      padding: '3rem 1rem',
      height: '100%',
      flexDirection: 'column-reverse',
      justifyContent: 'space-between',

      '& > div:first-child': {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridGap: '2rem',
        textAlign: 'center',

        '& > a': {
          textDecoration: 'none',
          '& span': {
            color: theme.palette.primary.contrastText,
            fontSize: '1.125rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            cursor: 'pointer',

            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
        },
      },

      [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-between',
        padding: '3rem 1rem',
        flexDirection: 'column-reverse',
        '& > div:first-child': {
          display: 'flex',
        },
      },

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2rem',

        '& > div:first-child': {
          display: 'flex',
          width: 'auto',
          '& > a > span': {
            marginRight: '1.5rem',
          },
        },
      },
    },
    phoneLink: {
      textDecoration: 'none',
    },
  })
);

export const getHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: `0 0 2.25rem ${colors.eastBay10Alpha}, inset 0 0 0.25rem ${colors.eastBay10Alpha}`,
      zIndex: 1,
    },
  })
);

export const getLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    top: 0,
    display: 'grid',
    gridTemplateRows: 'auto 1fr 22.5rem',
    '& main': {
      backgroundColor: theme.palette.primary.contrastText,
      overflowX: 'auto',

      '&>div': {
        paddingTop: '3rem',
      },
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateRows: 'auto 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateRows: 'auto 1fr',
    },
  },
}));
