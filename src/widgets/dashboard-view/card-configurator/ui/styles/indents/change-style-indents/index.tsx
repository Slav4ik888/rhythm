import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { f } from 'app/styles';
import { ChangeStyleItem, ConfiguratorTextTitle } from 'shared/ui/configurators-components';



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
  const { stylesByCardItemId } = useDashboardView();


  return (
    <Box sx={sx.root}>
      <Box sx={sx.row}>
        <Box sx={{ ...f('c-c-fs') }}>
          <ConfiguratorTextTitle title={title} toolTitle={toolTitle} bold={bold} />
        </Box>

        <ChangeStyleItem
          type       = 'number'
          title      = 'Сверху'
          width      = '4rem'
          field      = {baseField + 't' as ItemStylesField}
          value      = {stylesByCardItemId[baseField + 't' as ItemStylesField] as number}
          onSubmit   = {onChange}
        />
        <ChangeStyleItem
          type       = 'number'
          title      = 'Общие'
          width      = '4rem'
          field      = {baseField}
          value      = {stylesByCardItemId[baseField] as number}
          onSubmit   = {onChange}
        />
        <ChangeStyleItem
          type       = 'number'
          title      = 'Верх/низ'
          width      = '4rem'
          field      = {baseField + 'y' as ItemStylesField}
          value      = {stylesByCardItemId[baseField + 'y' as ItemStylesField] as number}
          onSubmit   = {onChange}
        />
      </Box>

      <Box sx={sx.row}>
        <ChangeStyleItem
          type       = 'number'
          title      = 'Слева'
          width      = '4rem'
          field      = {baseField + 'l' as ItemStylesField}
          value      = {stylesByCardItemId[baseField + 'l' as ItemStylesField] as number}
          onSubmit   = {onChange}
        />
        <ChangeStyleItem
          type       = 'number'
          title      = 'Снизу'
          width      = '4rem'
          field      = {baseField + 'b' as ItemStylesField}
          value      = {stylesByCardItemId[baseField + 'b' as ItemStylesField] as number}
          onSubmit   = {onChange}
        />
        <ChangeStyleItem
          type       = 'number'
          title      = 'Справа'
          width      = '4rem'
          field      = {baseField + 'r' as ItemStylesField}
          value      = {stylesByCardItemId[baseField + 'r' as ItemStylesField] as number}
          onSubmit   = {onChange}
        />
        <ChangeStyleItem
          type       = 'number'
          title      = 'Прав/лев'
          width      = '4rem'
          field      = {baseField + 'x' as ItemStylesField}
          value      = {stylesByCardItemId[baseField + 'x' as ItemStylesField] as number}
          onSubmit   = {onChange}
        />
      </Box>
    </Box>
  )
});
