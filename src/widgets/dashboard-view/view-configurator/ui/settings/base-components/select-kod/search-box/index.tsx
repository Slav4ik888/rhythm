import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
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
  const onChange = (e: any) => onSearch(e.target.value);

  return (
    <Box sx={sx.root}>
      <Input
        fullWidth
        autoFocus
        label    = 'Поиск'
        onChange = {onChange}
      />
    </Box>
  )
});
