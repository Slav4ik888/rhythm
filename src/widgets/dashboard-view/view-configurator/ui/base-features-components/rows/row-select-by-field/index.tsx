import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { ViewItem } from 'entities/dashboard-view';
import { f } from 'shared/styles';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { SelectByField } from '../../select-by-field';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
  title        : string
  toolTitle    : string
  disabled?    : boolean
  array        : string[] | any[] // any if component present
  component?   : FC<any> // Если нужен не стандартный компонент вместо item
  // children?    : React.ReactNode
  searchBox?   : FC<any> // Если нужен не стандартный поиск in SelectValue
  onSearch?    : (value: string) => void
}

export const RowSelectByField: FC<Props> = memo(({ selectedItem, scheme, title, toolTitle, array, component, disabled, searchBox, onSearch }) => {
  return (
    <RowWrapperTitle title={title} toolTitle={toolTitle}>
      <Box sx={f('-c')}>
        {/* {
          children
        } */}
        {
          ! disabled && <SelectByField
            scheme       = {scheme}
            array        = {array}
            component    = {component}
            selectedItem = {selectedItem}
            searchBox    = {searchBox}
            onSearch     = {onSearch}
          />
        }
      </Box>
    </RowWrapperTitle>
  )
});
