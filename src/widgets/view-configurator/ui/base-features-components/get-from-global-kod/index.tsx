import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { ChipType, useDashboardView } from 'entities/dashboard-view';
import { getConditionKod } from 'entities/condition-type';



const useStyles = () => ({
  root: {
    height : '24px',
    cursor : 'default'
  }
});

interface Props {
  type?: ChipType // Если тип condition, а в kodе нет суффикса'-C', то добавляем его для всех других типов, просто возвращаем код как есть
}

/** Код в зависимости используется ли isGlobalKod или нет */
export const GetFromGlobalKod: FC<Props> = memo(({ type }) => {
  const sx = useStyles();
  const { fromGlobalKod: kod } = useDashboardView();

  if (! kod) return null;

  return (
    <Chip
      label = {getConditionKod(type, kod)}
      sx    = {sx.root}
    />
  )
});
