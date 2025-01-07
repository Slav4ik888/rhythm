import { FC, memo, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ItemStylesField } from 'entities/dashboard-view';
import { f } from 'shared/styles';
import { SelectValue } from '../../../../../../../shared/ui/configurators-components/select';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { getDimension, isPx } from './utils';



interface Props {
  title     : string
  bold?     : boolean
  toolTitle : string
  field     : ItemStylesField
  value     : number | string | undefined
  onChange  : (field: ItemStylesField, value: number | string) => void
}

/** Размеры */
export const ChangeStyleItemDimensions: FC<Props> = memo(({ field, bold, toolTitle, title, value = '', onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>(''); // Если не строка или она пуста то это число
  const [isValueNumber, setIsValuerNumber] = useState(isPx(value));

  useEffect(() => {
    setSelectedValue(getDimension(value));
    setIsValuerNumber(isPx(value));
  }, [value]);


  const handleSelectedValue = (selected: string) => {
    setSelectedValue(selected);

    if (selected !== 'in px') return onChange(field, selected);
    if (selected === 'in px') return onChange(field, 0);

    setIsValuerNumber(true);
  };


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title={title} toolTitle={toolTitle} bold={bold}/>

      <Box sx={{ ...f('-c') }}>
        {/* In px */}
        <ChangeStyleItem
          type     = 'number'
          value    = {(isValueNumber && value || '') as number} // чтобы выводились только числа
          field    = {field}
          width    = '4rem'
          disabled = {! isValueNumber}
          onSubmit = {onChange}
        />

        {/* In text */}
        <SelectValue
          selectedValue = {selectedValue}
          array         = {['-', 'in px', '100%', 'auto', 'max-content', 'min-content']}
          onSelect      = {handleSelectedValue}
        />
      </Box>
    </RowWrapper>
  )
});
