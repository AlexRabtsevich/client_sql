import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {colors} from '../../constants'


export const getTableHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: colors.geyser,

      '& .MuiTableCell-head': {
        fontWeight: 'bold',
        color: 'black',
        fontSize: '1rem',
        lineHeight: '20px',
      },
    },
  }),
);

export const getTableBodyStyles = makeStyles({
  root: {
    '& .MuiTableRow-root': {
      '& .MuiTableCell-body': {
        fontWeight: '500',
        fontSize: '1rem',
      },
      '&:nth-of-type(odd)': {
        backgroundColor: colors.zircon,
      },
    },
  },
});

export const getTableStyles = makeStyles({
  root: {
    border: `1px solid ${colors.geyser}`,
    '& .MuiTableRow-root.Mui-selected': {
      background: colors.geyser,
    },

    '& .MuiTablePagination-root': {
      padding: '0.5rem',
      color: 'black',

      '& .MuiTablePagination-select': {
        paddingTop: '10px',
      },

      '& .MuiTablePagination-toolbar': {
        '& > *': {
          fontWeight: 'bold',
          fontSize: '1rem',
        },
      },
    },
  },
});
