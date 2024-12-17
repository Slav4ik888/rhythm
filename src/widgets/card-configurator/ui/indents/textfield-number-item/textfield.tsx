import { FC, memo, MouseEvent } from 'react';
import { ItemStylesField } from 'entities/card-item';
import { TextfieldItemNumber } from 'shared/ui/configurators-components';



interface Props {
  field        : ItemStylesField
  defaultValue : string | number | undefined
  onSubmit     : (field: ItemStylesField, value: number) => void
}


/**
 * Отдельный компонент, чтобы при обновлении состояния View ItemStyles,
 * изменялись входные значения в TextField
 */
export const ChangeStyleTextfieldNumberItemComponent: FC<Props> = memo(({ field, defaultValue, onSubmit }) => {

  return (
    <TextfieldItemNumber
      autoFocus
      defaultValue = {defaultValue}
      onSubmit     = {(e: MouseEvent, value: number | string) => onSubmit(field, value as number)}
    />
  )
});
