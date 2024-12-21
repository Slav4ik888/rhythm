import { FC, memo, MouseEvent } from 'react';
import { ItemStylesField } from 'entities/card-item';
import { ConfiguratorTextfieldItem } from 'shared/ui/configurators-components';



interface Props {
  field        : ItemStylesField
  defaultValue : string | number | undefined
  onCallback?  : (field: ItemStylesField, value: number) => void // Если нужно чтобы каждое изменение отображалось на экране
  onSubmit     : (field: ItemStylesField, value: number) => void
}


/**
 * Отдельный компонент, чтобы при обновлении состояния View ItemStyles,
 * изменялись входные значения в TextField
 */
export const ChangeStyleTextfieldNumberItemComponent: FC<Props> = memo(({ field, defaultValue, onCallback, onSubmit }) => {

  return (
    <ConfiguratorTextfieldItem
      autoFocus
      type         = 'number'
      defaultValue = {defaultValue}
      onCallback   = {(e: MouseEvent, value: number | string) => onCallback && onCallback(field, value as number)}
      onSubmit     = {(e: MouseEvent, value: number | string) => onSubmit(field, value as number)}
    />
  )
});
