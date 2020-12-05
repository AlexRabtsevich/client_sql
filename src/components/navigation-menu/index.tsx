import React, { FC, useCallback, useMemo } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { getNavigationLinksStyles } from './styles';
import { INavigationMenuLink } from '../../types';
import { useNavigationLinksOptions } from './use-navigation-links';

const NavigationMenu: FC = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const currentRoute = useMemo(() => match?.path.split('/').reduce((_, last) => `/${last}`), [
    match.path,
  ]);

  const onChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-types
    (event: React.ChangeEvent<{}>, path: string) => {
      history.push(path);
    },
    [history]
  );

  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'));
  const styles = getNavigationLinksStyles(isDesktopView);

  const navigationLinks: INavigationMenuLink[] = useNavigationLinksOptions();

  return (
    <BottomNavigation value={currentRoute} onChange={onChange} showLabels className={styles.root}>
      {navigationLinks.map((navigationLink) => (
        <BottomNavigationAction
          key={navigationLink.label}
          value={navigationLink.path}
          label={navigationLink.label}
          icon={navigationLink.icon}
        />
      ))}
    </BottomNavigation>
  );
};

export default NavigationMenu;
