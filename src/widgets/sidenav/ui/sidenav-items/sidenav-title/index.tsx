import { ColorName } from 'app/providers/theme';
import { FC, memo } from 'react';
import MDTypography from 'shared/ui/mui-design-components/md-typography';



interface Props {
  k         : string
  textColor : ColorName
  title     : string
}


export const SidenavTitle: FC<Props> = memo(({ k: key, textColor, title }) => (
  <MDTypography
    key           = {key}
    color         = {textColor}
    display       = "block"
    variant       = "caption"
    fontWeight    = "bold"
    textTransform = "uppercase"
    pl            = {3}
    mt            = {2}
    mb            = {1}
    ml            = {1}
  >
    {title}
  </MDTypography>
));

    