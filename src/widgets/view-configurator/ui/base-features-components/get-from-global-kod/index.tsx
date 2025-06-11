import { FC, memo } from 'react';
import Chip from '@mui/material/Chip';
import { ChipType, useDashboardView } from 'entities/dashboard-view';
import { getConditionKod } from 'entities/condition-type';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme, disabled?: boolean) => {
  const root = {
    height : '24px',
    cursor : 'default'
  };

  if (disabled) {
    // @ts-ignore
    root?.['&:hover'] = {};
    // @ts-ignore
    root?.['&:hover'] = {
      // @ts-ignore
      backgroundColor: theme.components.MuiChip.styleOverrides.root.backgroundColor
    }
  }

  return {
    root
  };
};

interface Props {
  type?     : ChipType // Если тип condition, а в kodе нет суффикса'-C', то добавляем его для всех других типов, просто возвращаем код как есть
  disabled? : boolean
}

/** Код в зависимости используется ли isGlobalKod или нет */
export const GetFromGlobalKod: FC<Props> = memo(({ type, disabled }) => {
  const sx = useStyles(useTheme(), disabled);
  const { fromGlobalKod: kod } = useDashboardView();

  if (! kod) return null;

  return (
    <Chip
      label = {getConditionKod(type, kod)}
      sx    = {sx.root}
    />
  )
});
