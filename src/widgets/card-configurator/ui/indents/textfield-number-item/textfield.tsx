import { FC, memo, MouseEvent } from 'react';
import { ItemStylesField } from 'entities/card-item';
import { TextField } from 'shared/ui/containers';



const useStyles = () => ({
  textfield: {
    field: {
      width: '100%',
    },
    input: {
      padding: '2px 4px',
    }
  }
});


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
  const sx = useStyles();

  return (
    <TextField
      small
      autoFocus
      type         = 'number'
      defaultValue = {defaultValue}
      sx           = {sx.textfield}
      onBlur       = {(e: MouseEvent, value: number | string) => onSubmit(field, value as number)}
      onSubmit     = {(e: MouseEvent, value: number | string) => onSubmit(field, value as number)}
    />
  )
});
