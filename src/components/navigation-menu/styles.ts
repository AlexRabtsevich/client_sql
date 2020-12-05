import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { colors } from '../../constants';

export const getNavigationLinksStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: (isDesktopView: boolean) => {
      if (isDesktopView) {
        return {
          background: 'linear-gradient(89.79deg, #202F42 64.5%, #009AFF 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '56px',
          '& .MuiBottomNavigationAction-root': {
            maxWidth: '250px',
            width: 'auto',
            height: '100%',
          },
          '& .MuiBottomNavigationAction-wrapper': {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.geyser,
          },
          '& .MuiBottomNavigationAction-label': {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '1.1rem',
            paddingLeft: '0.5rem',
            color: colors.geyser,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            '&.Mui-selected': {
              color: theme.palette.common.white,
            },
          },
          '& .MuiBottomNavigationAction-root.Mui-selected': {
            background: 'rgba(0, 154, 255, 0.3)',
            height: '100%',

            '& > *': {
              color: theme.palette.common.white,
            },
          },
          '& .MuiSvgIcon-root': {
            height: '24px',
            width: '24px',
          },
        };
      }

      return {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        '& .MuiBottomNavigationAction-root': {
          width: '100%',
          height: '100%',
          maxWidth: '100%',
        },
        '& .MuiBottomNavigationAction-wrapper': {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          color: colors.geyser,
        },
        '& .MuiBottomNavigationAction-label': {
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '1.1rem',
          paddingLeft: '0.4rem',
          color: colors.ebonyClay,
          paddingBottom: '0.1rem',
        },
        '& .MuiSvgIcon-root': {
          height: '2rem',
          width: '2rem',
        },
        '& .MuiBottomNavigationAction-root.Mui-selected': {
          background: 'linear-gradient(91.59deg, #009AFF 35.42%, #0052B4 100%)',
          height: '100%',
          '& > *': {
            color: theme.palette.common.white,
          },
        },
        '& .Mui-selected': {
          color: theme.palette.common.white,
        },
      };
    },
  })
);
