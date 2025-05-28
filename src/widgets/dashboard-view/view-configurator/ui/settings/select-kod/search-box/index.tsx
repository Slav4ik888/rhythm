import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { useDashboardData } from 'entities/dashboard-data';
import { Input } from 'shared/ui/containers';



const useStyles = () => ({
  root: {
    ...f(),
    width : '100%',
    p     :1,
  },
});


interface Props {
  onSearch: (value: string) => void
}

/** SearchBox для поиска внутри списка Kods */
export const SelectKodItemSearchBox: FC<Props> = memo(({ onSearch }) => {
  const sx = useStyles();
  console.log('Rendered SearchBox');
  const onChange = (e: any) => {
    console.log(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Box sx={sx.root}>
      <Input
        fullWidth
        label    = 'Поиск'
        onChange = {onChange}
      />
    </Box>
  )
});
