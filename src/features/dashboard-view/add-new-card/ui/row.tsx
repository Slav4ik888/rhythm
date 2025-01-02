import { FC, memo, useCallback } from 'react';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, pxToRem, useTheme } from 'app/providers/theme';
import { MDButton } from 'shared/ui/mui-design-components';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { createCardItem } from 'entities/dashboard-view/model/creators';
import AddCardIcon from '@mui/icons-material/AddCard';
import { createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';
import { CardItemType } from 'entities/dashboard-view/model/types';
import { blue, deepOrange, teal } from '@mui/material/colors';



const useStyles = (theme: CustomTheme) => ({
  buttonBox: {
    root: {
      color      : blue[900],
      marginLeft : pxToRem(16),
      fontSize   : '0.7rem',
    }
  },
  iconBox: {
    color    : blue[900],
    fontSize : '20px',
  },
  buttonText: {
    root: {
      color      : deepOrange[600],
      marginLeft : pxToRem(16),
      fontSize   : '0.7rem',
    }
  },
  iconText: {
    color    : deepOrange[600],
    fontSize : '20px',
  },
  buttonDivider: {
    root: {
      color      : teal[900],
      marginLeft : pxToRem(16),
      fontSize   : '0.7rem',
    }
  },
  iconDivider: {
    color    : teal[900],
    fontSize : '20px',
  },
});


interface Props {
}

/**  */
export const DashboardAddNewCardBtn: FC<Props> = memo(({ }) => {
  const { selectedId, childrenCardItems, parentChildrenIds, serviceAddNewCard } = useDashboardView();
  const { userId } = useUser();
  const { companyId } = useCompany();
  const sx = useStyles(useTheme());


  const handleAdd = useCallback((type: CardItemType) => {
    const cardItem = createCardItem({
      sheetId  : NO_SHEET_ID,
      parentId : selectedId,
      order    : createNextOrder(childrenCardItems),
      type,
    }, userId);
    
    serviceAddNewCard(companyId, cardItem);
  }, [parentChildrenIds, childrenCardItems, serviceAddNewCard]);


  return (
    <>
      <Tooltip title='Добавить новый элемент "Box"'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          sx        = {sx.buttonBox}
          startIcon = {<AddCardIcon sx={sx.iconBox} />}
          onClick   = {() => handleAdd('box')}
        >
          Box
        </MDButton>
      </Tooltip>

      <Tooltip title='Добавить новый элемент "Text"'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          sx        = {sx.buttonText}
          startIcon = {<AddCardIcon sx={sx.iconText} />}
          onClick   = {() => handleAdd('text')}
        >
          Text
        </MDButton>
      </Tooltip>

      <Tooltip title='Добавить новый элемент "Divider"'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          sx        = {sx.buttonDivider}
          startIcon = {<AddCardIcon sx={sx.iconDivider} />}
          onClick   = {() => handleAdd('divider')}
        >
          Divider
        </MDButton>
      </Tooltip>
    </>
  )
});
