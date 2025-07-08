import { FC, memo, useCallback } from 'react';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme } from 'app/providers/theme';



interface Props {

}


export const AddNewSheetBtn: FC<Props> = memo(({  }) => {
  const handleAdd = useCallback(() => {
    console.log('add new sheet');
  }, []);


  return (
    <>
      <Tooltip title='Добавить новую вкладку'>
        <Box
          sx={(theme) => ({
            ...f('-c-c'),
            cursor : 'pointer',
            border : `1px dotted ${(theme as CustomTheme).palette.text.light}`
          })}
          onClick={handleAdd}
        >
          <AddIcon sx={{ color: 'text.light' }} />
          <Typography
            sx={{
              fontSize : '12px',
              color    : 'text.light'
            }}
          >
            добавить
          </Typography>
        </Box>
      </Tooltip>
    </>
  )
});
