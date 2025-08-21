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
  const { paramsCompanyId } = useCompany();

  const renderLinks = useCallback(() => getLinks(paramsCompanyId)
    .map(({ name, route = '', requireAuth }) => {
      if (! requireAuth || (requireAuth && auth)) return (
        <MDBox
          key       = {name}
          component = 'li'
          sx        = {{
            lineHeight : 1,
            listStyle  : 'none',
            px         : 2,
          }}
        >
          <Link to={route}>
            <MDTypography
              variant    = 'body1'
              fontWeight = 'regular'
              color      = 'text'
            >
              {name}
            </MDTypography>
          </Link>
        </MDBox>
      )
      else return null
    }
  ),
    [auth, paramsCompanyId]
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
