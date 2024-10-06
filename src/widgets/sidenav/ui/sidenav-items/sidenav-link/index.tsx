import { FC, memo } from 'react';
import Link from "@mui/material/Link";
import SidenavCollapse from "../sidenav-collapse";



interface Props {
  k           : string
  href        : string
  title       : string
  icon        : React.ReactNode | string
  activeName  : string
  noCollapse? : boolean
}

export const SidenavLink: FC<Props> = memo(({ k: key, href, activeName, noCollapse, icon, title }) => (
  <Link
    href   = {href}
    target = "_blank"
    rel    = "noreferrer"
    sx     = {{ textDecoration: "none" }}
  >
    <SidenavCollapse
      title      = {title}
      icon       = {icon}
      active     = {key === activeName}
      noCollapse = {noCollapse}
    />
  </Link>
));

    