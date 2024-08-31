import { FC, memo } from 'react';
import Link from "@mui/material/Link";
import SidenavCollapse from "../sidenav-collapse";


interface Props {
  key: string
  href: string
  name: string
  icon: React.ReactNode | string
  collapseName: string
  noCollapse?: boolean
}

export const SidenavLink: FC<Props> = memo(({ key, href, collapseName, noCollapse, icon, name }) => (
  <Link
    href={href}
    key={key}
    target="_blank"
    rel="noreferrer"
    sx={{ textDecoration: "none" }}
  >
    <SidenavCollapse
      name={name}
      icon={icon}
      active={key === collapseName}
      noCollapse={noCollapse}
    />
  </Link>
));

    