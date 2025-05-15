import { FC, memo, MouseEvent } from 'react';
import { Box } from '@mui/material';
import { ViewItem, ViewItemStylesField } from 'entities/dashboard-view';
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
  selectedItem : ViewItem | undefined
  title        : string
  bold?        : boolean
  toolTitle    : string
  baseField    : 'p' | 'm'
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** Отступы */
export const ChangeStyleItemIndents: FC<Props> = memo(({ selectedItem, baseField, bold, toolTitle, title, onChange }) => {
  const sx = useStyles();

  const handleEmpty = (e: MouseEvent, v: string | number) => {};

  return (
    <Box sx={sx.root}>
      <Box sx={sx.row}>
        <Box sx={{ ...f('c-c-fs') }}>
          <ConfiguratorTextTitle title={title} toolTitle={toolTitle} bold={bold} />
        </Box>

        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = {`styles.${baseField + 't'}`}
          width        = '4rem'
          helperText   = 'Сверху'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => onChange(baseField + 't' as ViewItemStylesField, v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => onChange(baseField + 't' as ViewItemStylesField, v)}
        />
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = {`styles.${baseField}`}
          width        = '4rem'
          helperText   = 'Общие'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => onChange(baseField as ViewItemStylesField, v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => onChange(baseField as ViewItemStylesField, v)}
        />
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = {`styles.${baseField + 'y'}`}
          width        = '4rem'
          helperText   = 'Верх/низ'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => onChange(baseField + 'y' as ViewItemStylesField, v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => onChange(baseField + 'y' as ViewItemStylesField, v)}
        />
      </Box>

      <Box sx={sx.row}>
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = {`styles.${baseField + 'l'}`}
          width        = '4rem'
          helperText   = 'Слева'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => onChange(baseField + 'l' as ViewItemStylesField, v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => onChange(baseField + 'l' as ViewItemStylesField, v)}
        />
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = {`styles.${baseField + 'b'}`}
          width        = '4rem'
          helperText   = 'Снизу'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => onChange(baseField + 'b' as ViewItemStylesField, v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => onChange(baseField + 'b' as ViewItemStylesField, v)}
        />
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = {`styles.${baseField + 'r'}`}
          width        = '4rem'
          helperText   = 'Справа'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => onChange(baseField + 'r' as ViewItemStylesField, v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => onChange(baseField + 'r' as ViewItemStylesField, v)}
        />
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = {`styles.${baseField + 'x'}`}
          width        = '4rem'
          helperText   = 'Прав/лев'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => onChange(baseField + 'x' as ViewItemStylesField, v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => onChange(baseField + 'x' as ViewItemStylesField, v)}
        />
      </Box>
    </Box>
  )
});
