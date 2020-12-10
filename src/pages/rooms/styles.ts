import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { linkWater } from '../../constants/colors';
import { colors } from '../../constants';

export const getFiltersStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2.5),
      marginBottom: theme.spacing(5),
      background: linkWater,
      border: `0.125rem solid ${linkWater}`,
      boxSizing: 'border-box',
      borderRadius: '0.75rem',
      boxShadow: 'none',
      padding: '1.5rem',
      '& .MuiGrid-container': {
        alignItems: 'center',
        justifyContent: 'space-around',
        '& .MuiTypography-h2': {
          margin: 0,
        },
        '& .MuiFormControl-root': {
          width: '12rem',
          '&:first-child': {
            width: '19.75rem',
          },
          '& > .MuiInputBase-root > .MuiSelect-root': {
            height: 'auto',
          },
        },
        '& .MuiGrid-item': {
          display: 'flex',
          flexDirection: 'row',
          '& .MuiTypography-subtitle2': {
            alignSelf: 'center',
            marginLeft: '1.5rem',
            marginRight: '0.75rem',
            color: colors.black80Alpha,
          },
        },
      },
      [theme.breakpoints.down('md')]: {
        '& > .MuiGrid-container': {
          flexDirection: 'column',
          '& > .MuiGrid-root': {
            maxWidth: '100%',
            width: '100%',
            '&:first-child': {
              marginBottom: theme.spacing(1),
            },
            '& .MuiGrid-item': {
              '& .MuiTypography-subtitle2': {
                marginLeft: '0.5rem',
                marginRight: '0.5rem',
              },
            },
          },
        },
      },
    },
  })
);
