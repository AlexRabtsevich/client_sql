import React, { FC, ReactElement } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MaterialDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import getModalStyles from './style';

interface IProps {
  isOpen: boolean;
  onClose?: () => void;
  actionBar?: ReactElement;
}

const Modal: FC<IProps> = ({ children, onClose, actionBar, isOpen }) => {
  const classes = getModalStyles();

  const withActionBar = !!actionBar;

  return (
    <MaterialDialog className={classes.root} fullWidth open={isOpen} onBackdropClick={onClose}>
      <CloseIcon className={classes.headerCloseIcon} onClick={onClose} />
      <DialogContent style={{ padding: '2rem' }}>{children}</DialogContent>
      {withActionBar && <DialogActions className={classes.actionBar}>{actionBar}</DialogActions>}
    </MaterialDialog>
  );
};

export default Modal;
