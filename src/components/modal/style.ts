import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { colors } from '../../constants';

const getModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiDialog-paper': {
        maxWidth: theme.spacing(108),
        borderRadius: theme.spacing(1.5),
        position: 'relative',
        overflowX: 'hidden',
      },
      '& .MuiDialogContent-root': {
        padding: 0,
        overflowX: 'hidden',
      },
      '& > .MuiDialog-container': {
        background: colors.shuttleGray50Alpha,
        backdropFilter: 'blur(12px)',
        [theme.breakpoints.up('md')]: {
          alignItems: 'flex-start',
        },
      },
    },
    headerCloseIcon: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2.5),
      width: theme.spacing(3),
      height: theme.spacing(3),
      cursor: 'pointer',
      color: theme.palette.text.secondary,
    },
    header: {
      paddingBottom: theme.spacing(3.5),
      '& > h1': {
        marginBottom: 0,
      },
    },
    actionBar: {
      padding: `${theme.spacing(4)}px 0 0`,
    },
  })
);

export default getModalStyles;
