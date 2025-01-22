import { FC, memo, useCallback, MouseEvent } from 'react';
import { Input, InputType } from 'shared/ui/containers';
import { PartialCardItem, useDashboardView } from 'entities/dashboard-view';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import { SxCard } from 'shared/styles';



const useStyles = (sx?: SxCard, width?: string) => ({
  textfield: {
    bg: {
      ...sx?.bg,
    },
    field: {
      width: width ? width : '80px',
      ...sx?.field,
    },
    input: {
      textAlign : 'center',
      padding   : '2px 4px',
    }
  }
});

interface Props {
  scheme     : string
  type       : InputType
  toolTitle? : string
  width?     : string
  sx?        : SxCard
}


/** Input update CardItem */
export const InputByScheme: FC<Props> = memo(({ scheme, type, toolTitle, width, sx: style }) => {
  const sx = useStyles(style, width);
  const { selectedItem, updateCardItem } = useDashboardView();


  // Тип приходит тот что указали в type
  const handleChange = useCallback((e: MouseEvent, v: string | number) => {
    const result: PartialCardItem = {
      id: selectedItem.id
    };

    setValueByScheme(result, scheme, v);
    updateCardItem(result);
  }, [selectedItem]);


  return (
    <Tooltip title={toolTitle}>
      <Input
        type         = {type}
        defaultValue = {getValueByScheme(selectedItem, scheme)}
        changesValue = {getValueByScheme(selectedItem, scheme)}
        sx           = {sx.textfield}
        onBlur       = {handleChange}
        onChange     = {handleChange}
        onSubmit     = {handleChange}
      />
    </Tooltip>
  )
});
