import { FC, memo, MouseEvent, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { f } from 'app/styles';
import { isNum, isStr, isUndefined } from 'shared/lib/validators';
import { SelectValue } from '../../../../../shared/ui/configurators-components/select';
import { ConfiguratorTextTitle, ConfiguratorTextfieldItem, RowWrapper } from 'shared/ui/configurators-components';
import { getDimension } from './get-dimension';
import { ChangeStyleTextfieldNumberItem } from '../../indents/textfield-number-item';



interface Props {
  title        : string
  cardItemId   : CardItemId
  bold?        : boolean
  toolTitle    : string
  field        : ItemStylesField
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}

/** Размеры */
export const ChangeStyleItemDimensions: FC<Props> = memo(({ field, cardItemId, bold, toolTitle, title, defaultValue = '', onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>(''); // Если не строка или она пуста то это число
  const [isValueNumber, setIsValuerNumber] = useState(isNum(defaultValue) || isUndefined(defaultValue));

  useEffect(() => {
    setSelectedValue(getDimension(defaultValue));
  }, [defaultValue]);


  const handleSubmit = (field: ItemStylesField, value: number | string) => onChange(field, value);

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
        <ChangeStyleTextfieldNumberItem
          title      = {title}
          field      = {field}
          disabled   = {! isValueNumber}
          cardItemId = {cardItemId}
          onSubmit   = {handleSubmit}
        />
        {/* <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {defaultValue}
          disabled     = {! isValueNumber}
          onSubmit     = {handleSubmit}
        /> */}

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
