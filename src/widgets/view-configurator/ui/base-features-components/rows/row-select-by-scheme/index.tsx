import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { ViewItem } from 'entities/dashboard-view';
import { f } from 'shared/styles';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { SelectByScheme } from '../../by-scheme/select-by-scheme';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
  title        : string
  boldTitle?   : boolean
  toolTitle    : string
  disabled?    : boolean
  array        : string[] | any[] // any if component present
  component?   : FC<any> // Если нужен не стандартный компонент вместо item
  searchBox?   : FC<any> // Если нужен не стандартный поиск in SelectValue
  onSearch?    : (value: string) => void
}

export const RowSelectByScheme: FC<Props> = memo(({
  selectedItem, scheme, title, toolTitle, array, component, boldTitle, disabled, searchBox, onSearch
}) => (
  <RowWrapperTitle
    title     = {title}
    boldTitle = {boldTitle}
    toolTitle = {toolTitle}
  >
    <Box sx={f('-c')}>
      {
        ! disabled && <SelectByScheme
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
));
