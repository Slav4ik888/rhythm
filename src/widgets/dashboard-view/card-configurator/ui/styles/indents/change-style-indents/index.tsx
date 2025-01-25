import { FC, memo, MouseEvent } from 'react';
import { Box } from '@mui/material';
import { ItemStylesField } from 'entities/dashboard-view';
import { ConfiguratorTextTitle } from 'shared/ui/configurators-components';
import { InputByScheme } from '../../../base-features-components';
import { f } from 'shared/styles';



const useStyles = () => ({
  root: {
    ...f('c'),
    mb : 1,
    py : 0.5,
  },
  row: {
    ...f('-fs-sb'),
  }
});


interface Props {
  title     : string
  bold?     : boolean
  toolTitle : string
  baseField : 'p' | 'm'
  onChange  : (field: ItemStylesField, value: number | string) => void
}

/** Отступы */
export const ChangeStyleItemIndents: FC<Props> = memo(({ baseField, bold, toolTitle, title, onChange }) => {
  const sx = useStyles();

  const handleEmpty = (e: MouseEvent, v: string | number) => {};

  return (
    <Box sx={sx.root}>
      <Box sx={sx.row}>
        <Box sx={{ ...f('c-c-fs') }}>
          <ConfiguratorTextTitle title={title} toolTitle={toolTitle} bold={bold} />
        </Box>

        <InputByScheme
          type       = 'number'
          scheme     = {`styles.${baseField + 't'}`}
          width      = '4rem'
          helperText = 'Сверху'
          onChange   = {handleEmpty}
          onBlur     = {(e: MouseEvent, v: string | number) => onChange(baseField + 't' as ItemStylesField, v)}
          onSubmit   = {(e: MouseEvent, v: string | number) => onChange(baseField + 't' as ItemStylesField, v)}
        />
        <InputByScheme
          type       = 'number'
          scheme     = {`styles.${baseField}`}
          width      = '4rem'
          helperText = 'Общие'
          onChange   = {handleEmpty}
          onBlur     = {(e: MouseEvent, v: string | number) => onChange(baseField as ItemStylesField, v)}
          onSubmit   = {(e: MouseEvent, v: string | number) => onChange(baseField as ItemStylesField, v)}
        />
        <InputByScheme
          type       = 'number'
          scheme     = {`styles.${baseField + 'y'}`}
          width      = '4rem'
          helperText = 'Верх/низ'
          onChange   = {handleEmpty}
          onBlur     = {(e: MouseEvent, v: string | number) => onChange(baseField + 'y' as ItemStylesField, v)}
          onSubmit   = {(e: MouseEvent, v: string | number) => onChange(baseField + 'y' as ItemStylesField, v)}
        />
      </Box>

      <Box sx={sx.row}>
        <InputByScheme
          type       = 'number'
          scheme     = {`styles.${baseField + 'l'}`}
          width      = '4rem'
          helperText = 'Слева'
          onChange   = {handleEmpty}
          onBlur     = {handleEmpty}
          onSubmit   = {(e: MouseEvent, v: string | number) => onChange(baseField + 'l' as ItemStylesField, v)}
        />
        <InputByScheme
          type       = 'number'
          scheme     = {`styles.${baseField + 'b'}`}
          width      = '4rem'
          helperText = 'Снизу'
          onChange   = {handleEmpty}
          onBlur     = {handleEmpty}
          onSubmit   = {(e: MouseEvent, v: string | number) => onChange(baseField + 'b' as ItemStylesField, v)}
        />
        <InputByScheme
          type       = 'number'
          scheme     = {`styles.${baseField + 'r'}`}
          width      = '4rem'
          helperText = 'Справа'
          onChange   = {handleEmpty}
          onBlur     = {handleEmpty}
          onSubmit   = {(e: MouseEvent, v: string | number) => onChange(baseField + 'r' as ItemStylesField, v)}
        />
        <InputByScheme
          type       = 'number'
          scheme     = {`styles.${baseField + 'x'}`}
          width      = '4rem'
          helperText = 'Прав/лев'
          onChange   = {handleEmpty}
          onBlur     = {handleEmpty}
          onSubmit   = {(e: MouseEvent, v: string | number) => onChange(baseField + 'x' as ItemStylesField, v)}
        />
      </Box>
    </Box>
  )
});
