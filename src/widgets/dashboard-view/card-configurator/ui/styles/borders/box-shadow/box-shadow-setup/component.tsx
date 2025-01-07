import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ChangeStyleItem } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  offsetX           : number
  offsetY           : number
  blurRadius        : number
  spreadRadius      : number
  color             : string
  onSetOffsetX      : (field: ItemStylesField, value: number | string) => void
  onSetOffsetY      : (field: ItemStylesField, value: number | string) => void
  onSetBlurRadius   : (field: ItemStylesField, value: number | string) => void
  onSetSpreadRadius : (field: ItemStylesField, value: number | string) => void
  onSetColor        : (value: string) => void
}

/**
 * box-shadow component
 */
export const BoxShadowSetupComponent: FC<Props> = memo(({
  offsetX, offsetY, blurRadius, spreadRadius, color,
  onSetOffsetX, onSetOffsetY, onSetBlurRadius, onSetSpreadRadius, onSetColor
}) => {
   

  return (
    <Box sx={{ ...f('-c') }}>
      <ChangeStyleItem
        type       = 'number'
        value      = {offsetX}
        toolTitle  = 'offset-x'
        sx         = {{ root: { mx: 1 }}}
        onCallback = {onSetOffsetX}
        onSubmit   = {onSetOffsetX}
      />
      <ChangeStyleItem
        type       = 'number'
        value      = {offsetY}
        toolTitle  = 'offset-y'
        sx         = {{ root: { mx: 1 }}}
        onCallback = {onSetOffsetY}
        onSubmit   = {onSetOffsetY}
      />
      <ChangeStyleItem
        type       = 'number'
        value      = {blurRadius}
        toolTitle  = 'blur-radius'
        sx         = {{ root: { mx: 1 }}}
        onCallback = {onSetBlurRadius}
        onSubmit   = {onSetBlurRadius}
      />
      <ChangeStyleItem
        type       = 'number'
        value      = {spreadRadius}
        toolTitle  = 'spread-radius'
        sx         = {{ root: { mx: 1 }}}
        onCallback = {onSetSpreadRadius}
        onSubmit   = {onSetSpreadRadius}
      />

      <ColorPicker
        defaultColor = {color}
        onChange     = {onSetColor}
      />
    </Box>
  )
});
