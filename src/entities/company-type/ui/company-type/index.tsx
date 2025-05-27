import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomSettings } from 'entities/company';
import { f, pxToRem, SxCard } from 'shared/styles';



const useStyle = (companyType: string, customSettings : CustomSettings, sx?: SxCard) => ({
  tooltip: {
    ...f('-c'),
    height     : pxToRem(20),
    cursor     : 'default',
  },
  chip: {
    width      : pxToRem(70),
    height     : pxToRem(15),
    fontSize   : pxToRem(12),
    color      : customSettings?.companyType?.[companyType]?.color || '#999',
    background : customSettings?.companyType?.[companyType]?.background || '#eee',
    ...sx?.root,
  }
});

interface Props {
  type?          : string
  customSettings : CustomSettings
  sx?            : SxCard
}


/**
 * TODO: сделать ярлыком влевом верхнем углу карточки статистики (поз: абсолют)
 * Chip для статистики типа компании: Общая | Да-Телеком | Бэдком |
 */
export const CompanyTypeChip: FC<Props> = memo(({ type = '', sx: styles, customSettings }) => {
  const sx = useStyle(type, customSettings, styles);

  return (
    <Tooltip
      title     = {`Компания ${type}`}
      placement = 'top-start'
      sxSpan    = {sx.tooltip}
    >
      <Chip
        label = {type}
        size  = 'small'
        sx    = {sx.chip}
      />
    </Tooltip>
  )
});
