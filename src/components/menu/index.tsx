import React, { FC, useState, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';
import MenuMaterial from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { IMenuOptions } from '../../types';

interface IProps {
  options: IMenuOptions[];
}

const Menu: FC<IProps> = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onClickMenu = (action: Function) => {
    action();
    handleClose();
  };

  return (
    <div>
      <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
        <MenuIcon />
      </Button>
      <MenuMaterial
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem onClick={() => onClickMenu(option.action)}>{option.label}</MenuItem>
        ))}
      </MenuMaterial>
    </div>
  );
};

export default Menu;
