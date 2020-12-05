import React, { useMemo } from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

import { Routes } from '../../constants';
import { INavigationMenuLink } from '../../types';

export const useNavigationLinksOptions = (): INavigationMenuLink[] =>
  useMemo<INavigationMenuLink[]>(() => {
    return [
      { label: 'Login', path: Routes.Login, icon: <ExitToAppIcon /> },
      { label: 'Sign Up', path: Routes.SignUp, icon: <AccessibilityNewIcon /> },
    ];
  }, []);
