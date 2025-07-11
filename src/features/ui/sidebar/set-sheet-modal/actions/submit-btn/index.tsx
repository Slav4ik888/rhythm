import { memo, FC, useCallback, useMemo } from 'react';
import { Button } from 'shared/ui/buttons';
import { creatorSheet, getSheetById, useCompany, validateDashboardSheetFields } from 'entities/company';
import { getSlug, russianToEnglish } from 'shared/helpers/strings';
import { useUser } from 'entities/user';
import { createNextOrder } from 'entities/dashboard-view';
import { DefaultIconId } from 'shared/assets';
import { SidebarListItem } from 'shared/types';
import { creatorFixDate } from 'entities/base';
import { isChanges } from 'shared/helpers/objects';



interface Props {
  editId         : string | undefined // sheetId if edit
  sheetTitle     : string
  selectedIconId : DefaultIconId | null
  onClose        : () => void
}


export const SetSheetSubmitBtn: FC<Props> = memo(({ editId, selectedIconId, sheetTitle, onClose }) => {
  const { loading, paramsCompanyId, paramsSheets, serviceUpdateCompany, setErrors } = useCompany();
  const { userId } = useUser();


  const disabled = useMemo(() => {
    if (loading) return true;

    if (editId) {
      const sheetById = getSheetById(paramsSheets, editId);
      console.log('sheetById: ', sheetById);
      console.log(' isChanges: ', sheetTitle === sheetById?.title && selectedIconId === sheetById.iconId);

      if (sheetById) return sheetTitle === sheetById.title && selectedIconId === sheetById.iconId
      else return true
    }
    else {
      const { valid } = validateDashboardSheetFields({ title: sheetTitle }, paramsSheets);
      console.log('valid: ', valid);
      return ! valid
    }
  },
    [editId, selectedIconId, sheetTitle, loading, paramsSheets]
  );

  console.log('disabled: ', disabled);

  const handlerSubmit = useCallback(() => {
    const { errors, valid } = validateDashboardSheetFields({ title: sheetTitle }, paramsSheets);
    console.log('valid Submit: ', valid);
    if (! valid) return setErrors(errors);

    // if (! sheetTitle || isNotStr(sheetTitle)) return setErrors({
    //   sheetTitle: 'Должно быть заполнено'
    // });
    //
    // if (sheetTitle.length > 30) return setErrors({
    //   sheetTitle: 'Должно быть не более 30 символов'
    // });

    const sheets = Object.values(paramsSheets);
    // if (sheets.find(sheet => sheet.title === sheetTitle)) return setErrors({
    //   sheetTitle: 'Такое название уже существует'
    // });

    let sheet = {} as SidebarListItem;

    if (editId && ! disabled) {
      const sheetById = getSheetById(paramsSheets, editId);

      if (! sheetById) return setErrors({ sheetTitle: 'Не найден лист для редактирования' });

      sheet.id = sheetById.id;
      if (sheetTitle !== sheetById.title) {
        sheet.title = sheetTitle;
      }
      if (selectedIconId !== sheetById.iconId) {
        sheet.iconId = selectedIconId;
      }
      sheet.lastChange = creatorFixDate(userId);
    }
    else {
      const id = getSlug(russianToEnglish(sheetTitle));

      sheet = {
        ...creatorSheet({
          userId,
          id,
          route  : id,
          title  : sheetTitle,
          iconId : selectedIconId || null,
          order  : createNextOrder(sheets),
        })
      }
    }

    serviceUpdateCompany({
      id: paramsCompanyId,
      sheets: {
        [sheet.id]: sheet
      }
    });

    onClose();
  },
    [
      editId, userId, paramsCompanyId, paramsSheets, selectedIconId, sheetTitle,
      disabled, onClose, serviceUpdateCompany, setErrors
    ]
  );


  return (
    <Button
      loading  = {loading}
      disabled = {disabled}
      variant  = 'outlined'
      text     = 'Отправить'
      onClick  = {handlerSubmit}
    />
  )
});
