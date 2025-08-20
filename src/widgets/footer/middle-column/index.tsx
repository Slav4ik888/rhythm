import { FC, memo } from 'react';
import Link from '@mui/material/Link';
import { AppRoutes, LinkType, RoutePath } from 'app/providers/routes';
import { f } from 'shared/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';



export const FooterMiddleColumn: FC = memo(() => (
  <Box
    component = 'ul'
    sx        = {{
      ...f('c-fs-fs'),
      listStyle : 'none',
      p         : 0,
    }}
  >
    {([
        { name: 'Примеры дашбордов', route: RoutePath[AppRoutes.DEMO] },
        // { href: 'https://rhy.thm.su/', route: '', name: 'About Us' },
        // { href: 'https://rhy.thm.su/', route: '', name: 'License' },
      ] as LinkType[]).map(({ route, name, href }) => (
      <Box
        key        = {name}
        component  = 'li'
        lineHeight = {1}
      >
        {
          route
            ? <NavLink to={route}>
                <Typography color='text'>{name}</Typography>
              </NavLink>
            : <Link href={href} target='_blank'>
                <Typography color='text'>{name}</Typography>
              </Link>
        }
      </Box>
    ))}
  </Box>
));
