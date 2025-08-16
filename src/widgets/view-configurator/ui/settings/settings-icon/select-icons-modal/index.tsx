import { FC, memo, useCallback } from 'react';
import { DialogInfo } from 'shared/ui/dialogs';
import { UseValue } from 'shared/lib/hooks';
import { DefaultIconId, defaultIcons } from 'shared/lib/icons';
import ListItemIcon from '@mui/material/ListItemIcon';
import { CustomTheme } from 'app/providers/theme';
import { useDashboardViewActions } from 'entities/dashboard-view';



interface Props {
  hookOpen: UseValue<any>
}


export const SelectIconsModal: FC<Props> = memo(({ hookOpen: O }) => {
  const { changeOneSettingsField } = useDashboardViewActions();

  const handlerClick = useCallback((value: DefaultIconId) => {
    changeOneSettingsField({ field: 'iconId', value });
    O.setClose();
  },
    [O, changeOneSettingsField]
  );


  return (
    <DialogInfo
      hookOpen = {O}
      title    = 'Выберите подходящую иконку'
      maxWidth = 'md'
      onClose  = {() => O.setClose()}
    >
      {
        Object
          .entries(defaultIcons)
          .map(([key, IconComponent]) => (
            <ListItemIcon
              key     = {key}
              onClick = {() => handlerClick(key as DefaultIconId)}
            >
              {/* @ts-ignore */}
              <IconComponent
                sx={(theme) => ({
                  '&.MuiSvgIcon-root': {
                    color: (theme as CustomTheme).palette.text.main,
                  }
                })}
              />
            </ListItemIcon>
          )
        )
      }
    </DialogInfo>
  )
});
