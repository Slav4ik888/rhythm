import { FC, memo, useCallback, useMemo } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { sxNavbarRow } from '../styles';
import { CustomTheme } from 'app/providers/theme';
import { LinkType, RoutePath } from 'app/providers/routes';
import { Link } from 'react-router-dom';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';



interface Props {
  isMini : boolean
}

export const NavbarLinksBox: FC<Props> = memo(({ isMini = false }) => {
  const { auth } = useUser();
  const { companyId } = useCompany();

  const links: LinkType[] = useMemo(() => [
    {
      name: 'Перейти в Dashboard',
      href: `${companyId}/${RoutePath.DASHBOARD}`,
      requireAuth: true,
    },
  ], [companyId]);


  const renderLinks = useCallback(() =>
    links.map((link) => {
      if (! link.requireAuth || (link.requireAuth && auth)) return (
        <MDBox
          key={link.name}
          component='li'
          sx={{
            lineHeight: 1,
            listStyle: 'none',
            px: 2,
          }}
        >
          <Link to={link.href}>
            <MDTypography variant='body1' fontWeight='regular' color='text'>
              {link.name}
            </MDTypography>
          </Link>
        </MDBox>
      )
      else return null
    }), [auth, links]);

  return (
    <MDBox
      color = 'inherit'
      mb    = {{ xs: 1, md: 0 }}
      sx    = {(theme: CustomTheme) => sxNavbarRow(theme, isMini)}
    >
      {renderLinks()}
    </MDBox>
  );
})
