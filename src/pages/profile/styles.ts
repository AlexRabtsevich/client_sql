import { makeStyles } from '@material-ui/core/styles';

export const getProfileStyles = makeStyles({
  root: {
    padding: '3rem',
    boxShadow: '0px 0px 36px rgba(74, 92, 136, 0.1), inset 0px 0px 4px rgba(74, 92, 136, 0.1)',
  },
  button: {
    padding: '2rem 0',
  },
  title: {
    fontWeight: 'bold',
  },
  info: {
    paddingTop: '2rem',
  },
});
