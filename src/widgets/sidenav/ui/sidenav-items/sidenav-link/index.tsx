import { FC, memo } from 'react';
import Link from "@mui/material/Link";
import SidenavCollapse from "../sidenav-collapse";



interface Props {
  href        : string
  title       : string
  activeName  : string // as title
  icon        : React.ReactNode | string
  noCollapse? : boolean
}

export const SidenavLink: FC<Props> = memo(({ href, activeName, noCollapse, icon, title }) => (
  <Link
    href   = {href}
    target = "_blank"
    rel    = "noreferrer"
    sx     = {{ textDecoration: "none" }}
  >
    <SidenavCollapse
      title      = {title}
      icon       = {icon}
      active     = {title === activeName}
      noCollapse = {noCollapse}
    />
  </Link>
));

    