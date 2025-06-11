import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { STATISTIC_PERIOD_TYPE } from '../../model/config';
import { StatisticPeriodType } from '../../model/types';
import { CustomTheme } from 'app/providers/theme';
import { f, pxToRem, SxCard } from 'shared/styles';
import { CustomSettings } from 'entities/company';
import { setValue } from 'shared/helpers/objects';



/** Вначале берёт label из customSettings */
const gelLabel = (
  type            : StatisticPeriodType,
  customSettings? : CustomSettings
) => setValue(customSettings?.periodType?.[type]?.title, STATISTIC_PERIOD_TYPE[type]?.label);

/** Вначале берёт цвета из customSettings */
const gelColor = (
  name            : 'color' | 'background',
  type            : StatisticPeriodType,
  theme           : CustomTheme,
  customSettings? : CustomSettings
) => setValue(customSettings?.periodType?.[type]?.[name], theme.palette.statisticPeriodTypeChip[type]?.[name]);



interface Props {
  type?           : StatisticPeriodType
  customSettings? : CustomSettings
  sx?             : SxCard
}


/**
 * Chip для типа статистики: День | Нед | Мес
 */
export const StatisticPeriodTypeChip: FC<Props> = memo(({ type = '' as StatisticPeriodType, customSettings, sx }) => (
  <Chip
    label = {gelLabel(type, customSettings)}
    size  = 'small'
    sx    = {(theme) => ({
      width      : pxToRem(70),
      height     : pxToRem(18),
      fontSize   : pxToRem(12),
      cursor     : 'default',
      color      : gelColor('color', type, theme as CustomTheme, customSettings),
      background : gelColor('background', type, theme as CustomTheme, customSettings),
      '&:hover': {
        background: gelColor('background', type, theme as CustomTheme, customSettings),
      },
      ...sx?.root,
    })}
  />
));
