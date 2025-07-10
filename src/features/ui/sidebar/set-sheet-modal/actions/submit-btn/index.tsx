import { forwardRef, MutableRefObject, useCallback } from 'react';
import { UseValue } from 'shared/lib/hooks';
import { Button } from 'shared/ui/buttons';
import { getRefValue } from 'shared/lib/refs';
import { creatorSheet, useCompany } from 'entities/company';
import { isNotStr } from 'shared/lib/validators';
import { getSlug, russianToEnglish } from 'shared/helpers/strings';
import { useUser } from 'entities/user';
import { createNextOrder } from 'entities/dashboard-view';
import { DefaultIconId } from 'shared/assets';



interface Props {
  editId         : string  // sheetId if edit
  ref            : MutableRefObject<null>
  selectedIconId : DefaultIconId | null
  hookOpen       : UseValue<any>
}

// Define props without 'ref' for forwardRef compatibility
type RefProps = Omit<Props, 'ref'>;

export const SetSheetSubmitBtn = forwardRef<null, RefProps>(({ editId, hookOpen: O, selectedIconId }, ref) => {
  const { loading, paramsCompanyId, paramsSheets, serviceUpdateCompany, setErrors } = useCompany();
  const { userId } = useUser();


  const handlerSubmit = useCallback(() => {
    const sheetTitle = getRefValue(ref as MutableRefObject<null>);

    // TODO: if (editId)

    if (! sheetTitle || isNotStr(sheetTitle)) return setErrors({
      sheetTitle: 'Должно быть заполнено'
    });

    const sheets = Object.values(paramsSheets);
    if (sheets.find(sheet => sheet.title === sheetTitle)) return setErrors({
      sheetTitle: 'Такое название уже существует'
    });

    const id = getSlug(russianToEnglish(sheetTitle));

    const sheet = creatorSheet({
      userId,
      id,
      route  : id,
      title  : sheetTitle,
      iconId : selectedIconId || null,
      order  : createNextOrder(sheets),
    });

    serviceUpdateCompany({
      id: paramsCompanyId,
      sheets: {
        [id]: sheet
      }
    });

    O.setClose();
  },
    [editId, userId, paramsCompanyId, paramsSheets, selectedIconId, ref, O, serviceUpdateCompany, setErrors]
  );


  return (
    <Button
      loading = {loading}
      variant = 'outlined'
      text    = 'Отправить'
      onClick = {handlerSubmit}
    />
  )
});
