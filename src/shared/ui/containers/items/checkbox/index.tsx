import { FC, memo } from 'react';
import { Checkbox } from '../../elements/checkbox';
import { UseGroup } from 'shared/lib/hooks';
import { GridStyle } from '../../grid-wrap';
import { SxCard } from 'app/styles-old/types';



interface Props {
  grid?         : GridStyle
  box?          : boolean
  sx?           : SxCard
  sxCheckbox?   : object
  group         : UseGroup<any>
  scheme?       : string
  label?        : string
  toolTitle?    : string
}


export const CheckboxContainer: FC<Props> = memo(({ group: G, box, sx, sxCheckbox, grid, scheme = '', label = '', toolTitle }) => {

  return (
    <Checkbox
      grid       = {grid}
      box        = {box}
      sx         = {sx}
      sxCheckbox = {sxCheckbox}
      label      = {label}
      scheme     = {scheme}
      group      = {G}
      toolTitle  = {toolTitle}
    />
  )
});
