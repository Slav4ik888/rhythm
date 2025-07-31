import { FC, memo, useCallback } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { sxNavbarRow } from '../../styles';
import { CustomTheme } from 'app/providers/theme';
import { Link } from 'react-router-dom';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { getLinks } from './utils';



export const AnyLinksBox: FC = memo(() => {
  const { auth } = useUser();
  const { companyId } = useCompany();

  const renderLinks = useCallback(() => getLinks(companyId)
    .map((link) => {
      if (! link.requireAuth || (link.requireAuth && auth)) return (
        <MDBox
          key       = {link.name}
          component = 'li'
          sx        = {{
            lineHeight : 1,
            listStyle  : 'none',
            px         : 2,
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
    }
  ),
    [auth, companyId]
  );


  return (
    <MDBox
      color = 'inherit'
      mb    = {{ xs: 1, md: 0 }}
      sx    = {(theme: CustomTheme) => sxNavbarRow(theme)}
    >
      {renderLinks()}
    </MDBox>
  );
})
