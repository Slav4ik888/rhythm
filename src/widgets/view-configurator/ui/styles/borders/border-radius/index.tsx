import { FC, memo, useCallback, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import { useDashboardView, ViewItem, ViewItemStyles, ViewItemStylesField } from 'entities/dashboard-view';
import { f } from 'shared/styles';
import { ConfiguratorTextTitle } from 'shared/ui/configurators-components';
import { InputByScheme } from '../../../base-features-components';
import { setFieldEmpty } from 'shared/helpers/objects';



const sxRow = {
  ...f('-fs-sb'),
  maxWidth: 'calc(100% - 1rem)'
};


interface Props {
  selectedItem: ViewItem | undefined
}

/** border-radius */
export const BorderRadiusRow: FC<Props> = memo(({ selectedItem }) => {
  const { setSelectedStyles } = useDashboardView();

  const handleChange = useCallback((field: ViewItemStylesField, value: number | string) => {
    if (! selectedItem) return;

    const newStyles: ViewItemStyles = {
      ...selectedItem?.styles,
      [field]: value,
    };

    if (field === 'borderRadius') {
      setFieldEmpty(newStyles, 'borderTopLeftRadius');
      setFieldEmpty(newStyles, 'borderTopRightRadius');
      setFieldEmpty(newStyles, 'borderBottomLeftRadius');
      setFieldEmpty(newStyles, 'borderBottomRightRadius');
    }

    setSelectedStyles(newStyles);
  }, [selectedItem, setSelectedStyles]);

  const handleEmpty = (e: MouseEvent, v: string | number) => {};


  return (
    <Box
      sx={{
        ...f('c'),
        mb : 1,
        py : 0.5,
      }}
    >
      <Box sx={sxRow}>
        {/* border-radius |Сверху-слева | Весь-верх | Сверху-справа | Всё-справа */}
        <Box sx={{ ...f('c-c-fs') }}>
          <ConfiguratorTextTitle bold title='border-radius' toolTitle='Border-radius' />
        </Box>
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.borderTopLeftRadius'
          width        = '4rem'
          helperText   = 'Сверху-слева'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('borderTopLeftRadius', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('borderTopLeftRadius', v)}
        />
        {/* <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.???'
          width        = '4rem'
          helperText   = 'Весь-верх'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
        /> */}
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.borderTopRightRadius'
          width        = '4rem'
          helperText   = 'Сверху-справа'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('borderTopRightRadius', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('borderTopRightRadius', v)}
        />
        {/* <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.???'
          width        = '4rem'
          helperText   = 'Всё-справа'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
        /> */}
      </Box>

      <Box sx={sxRow}>
      {/* Общее | Снизу-слева  | Весь-низ  | Снизу-справа  | Всё-слева */}
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.borderRadius'
          width        = '4rem'
          helperText   = 'Общее'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('borderRadius', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('borderRadius', v)}
        />
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.borderBottomLeftRadius'
          width        = '4rem'
          helperText   = 'Снизу-слева'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('borderBottomLeftRadius', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('borderBottomLeftRadius', v)}
        />
        {/* <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.???'
          width        = '4rem'
          helperText   = 'Весь-низ'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
        /> */}
        <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.borderBottomRightRadius'
          width        = '4rem'
          helperText   = 'Снизу-справа'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('borderBottomRightRadius', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('borderBottomRightRadius', v)}
        />
        {/* <InputByScheme
          type         = 'number'
          selectedItem = {selectedItem}
          scheme       = 'styles.???'
          width        = '4rem'
          helperText   = 'Всё-слева'
          onChange     = {handleEmpty}
          onBlur       = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
          onSubmit     = {(e: MouseEvent, v: string | number) => handleChange('???', v)}
        /> */}
      </Box>
    </Box>
  )
});
