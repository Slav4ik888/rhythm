import { FC, memo } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { sxNavbarRow } from '../styles';
import { CustomTheme } from 'app/providers/theme';
import { SxNavbarIcon } from '..';
import Breadcrumbs from 'shared/ui/breadcrumbs';



interface Props {
  isMini : boolean
  sx     : SxNavbarIcon
}


export const NavbarLinksBox: FC<Props> = memo(({ isMini = false, sx }) => {

  return (
    <MDBox
      color = 'inherit'
      mb    = {{ xs: 1, md: 0 }}
      sx    = {(theme: CustomTheme) => sxNavbarRow(theme, isMini)}
    >
      <Breadcrumbs
        title={route[route.length - 1]}
        route={route}
        light={light}
      />
    </MDBox>
  );
})
