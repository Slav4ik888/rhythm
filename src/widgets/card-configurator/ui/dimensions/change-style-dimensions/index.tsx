import { FC, memo, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ItemStylesField } from 'entities/card-item';
import { f } from 'app/styles';
import { isNum, isUndefined } from 'shared/lib/validators';
import { SelectValue } from '../../../../../shared/ui/configurators-components/select';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { getDimension } from './get-dimension';



interface Props {
  title        : string
  bold?        : boolean
  toolTitle    : string
  field        : ItemStylesField
  value        : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}

/** Размеры */
export const ChangeStyleItemDimensions: FC<Props> = memo(({ field, bold, toolTitle, title, value = '', onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>(''); // Если не строка или она пуста то это число
  const [isValueNumber, setIsValuerNumber] = useState(isNum(value) || isUndefined(value));

  useEffect(() => {
    setSelectedValue(getDimension(value));
    setIsValuerNumber(isNum(value) || isUndefined(value));
  }, [value]);


  const handleSelectedValue = (selected: string) => {
    setSelectedValue(selected);

    if (selected !== 'in px') return onChange(field, selected);

    setIsValuerNumber(true);
  };


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title={title} toolTitle={toolTitle} bold={bold}/>

      <Box sx={{ ...f('-c') }}>
        {/* In px */}
        <ChangeStyleItem
          value      = {'' || (isValueNumber && value) as number} // чтобы выводились только числа
          field      = {field}
          width      = '4rem'
          disabled   = {! isValueNumber}
          onSubmit   = {onChange}
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
