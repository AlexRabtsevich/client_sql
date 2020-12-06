import React, { useMemo } from 'react';

import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { Routes } from '../../constants';
import { INavigationMenuLink } from '../../types';

export const useNavigationLinksOptions = (isAuthorized: boolean): INavigationMenuLink[] =>
  useMemo<INavigationMenuLink[]>(() => {
    if (isAuthorized) {
      return [
        { label: 'Rooms', path: Routes.Rooms, icon: <MeetingRoomIcon /> },
        { label: 'Employees', path: Routes.Employees, icon: <PeopleIcon /> },
        { label: 'Customers', path: Routes.Customers, icon: <AccessibilityNewIcon /> },
        { label: 'Profile', path: Routes.Profile, icon: <AccountBoxIcon /> },
      ];
    }

    return [
      { label: 'Login', path: Routes.Login, icon: <ExitToAppIcon /> },
      { label: 'Sign Up', path: Routes.SignUp, icon: <AccessibilityNewIcon /> },
    ];
  }, [isAuthorized]);
