import { FC, memo } from 'react';
import { Tooltip } from '../../tooltip';
import { MDButton } from '../../mui-design-components';
import AddCardIcon from '@mui/icons-material/AddCard';
import { ViewItemType } from 'entities/dashboard-view';
import { capitalizeFirst } from 'shared/helpers/strings';
import { pxToRem } from 'shared/styles';
import { getColorByType } from './get-color-by-type';



interface Props {
  type    : ViewItemType
  // color   : string
  onClick : (type: ViewItemType) => void
}

/** Btn component */
export const AddBtn: FC<Props> = memo(({ type, onClick }) => {
  const title = capitalizeFirst(type);
  const color = getColorByType(type);

  return (
    <Tooltip title={`Добавить новый элемент "${title}"`}>
      <MDButton
        variant   = 'outlined'
        color     = 'dark'
        sx        = {{ root: { color, fontSize: '0.7rem' } }}
        startIcon = {<AddCardIcon sx={{ color, fontSize: pxToRem(20) }} />}
        onClick   = {() => onClick(type)}
      >
        {title}
      </MDButton>
    </Tooltip>
  )
});
