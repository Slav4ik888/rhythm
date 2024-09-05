import { FC, memo } from 'react';
import { MDButton } from 'shared/ui/mui-design-components';



interface Props {
  isChanged: boolean
  onSaveChanges: () => void
}


export const SetChangesBtn: FC<Props> = memo(({ isChanged, onSaveChanges }) => {

  if (! isChanged) return null;
  
  return (
    <MDButton
      variant = "gradient"
      color   = "secondary"
      type    = "button"
      onClick = {onSaveChanges}
    >
      Применить
    </MDButton>
  )
});
