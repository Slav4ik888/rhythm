import { FC, memo, useCallback } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import Box from '@mui/material/Box';
import { f, pxToRem } from 'shared/styles';
import { Tooltip } from 'shared/ui/tooltip';
import { useDashboardViewActions } from 'entities/dashboard-view';



interface Props {
  selectedId: string
}

export const IdTitle: FC<Props> = memo(({ selectedId }) => {
  const { setBright } = useDashboardViewActions();

  const handleClick = useCallback(() => {
    const element = document.getElementById(selectedId);
    if (element) {
      element.scrollIntoView({
        behavior : 'smooth',
        block    : 'center',
        inline   : 'center'
      });
    }
    // Подсвечиваем элемент
    setBright(true);

    // Отменяем подсветку
    setTimeout(() => {
      setBright(false);
    }, 3000);
  }, [selectedId, setBright]);


  return (
    <RowWrapper sx={{ root: { mt: 3 } }}>
      <ConfiguratorTextTitle bold title='Id' toolTitle='Item id' />
      <Tooltip title='Показать и подсветить этот элемент'>
        <Box
          onClick = {handleClick}
          sx      = {{
            ...f(),
            fontSize       : pxToRem(14),
            cursor         : 'pointer',
            textDecoration : 'none',
            gap            : 1,
            '&:hover': {
              textDecoration : 'underline',
            }
          }}
        >
          {selectedId}
        </Box>
      </Tooltip>
    </RowWrapper>
  )
});
