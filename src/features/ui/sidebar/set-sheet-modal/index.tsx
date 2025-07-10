import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { DialogInfo } from 'shared/ui/dialogs';
import { UseValue } from 'shared/lib/hooks';
import { SetSheetActions as Actions } from './actions';
import { SetSheetContent as Content } from './content';
import { DefaultIconId } from 'shared/assets';
import { useCompany } from 'entities/company';



interface Props {
  hookOpen : UseValue<any>
  editId   : string  // sheetId if edit
  onClose? : () => void
}


const SetSheetModal: FC<Props> = memo(({ hookOpen: O, editId, onClose }) => {
  const { paramsSheets } = useCompany();
  const [sheetIconId, setSheetIconId] = useState<DefaultIconId | null>(null);
  const sheetTitleRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    if (editId) {
      const sheet = Object.values(paramsSheets).find(sheet => sheet.id === editId);
      console.log(1);
      if (sheet) {
        console.log('2 sheet: ', sheet);
        setSheetIconId(sheet.iconId ?? null);

        if (sheetTitleRef.current) {
          console.log('3 current: ', sheetTitleRef.current);
          sheetTitleRef.current.value = sheet.title ?? '';
        }
      }
    }
  }, [editId, paramsSheets]);


  const handlerClose = useCallback(() => {
    O.setClose();
    onClose && onClose();
  }, [O, onClose]);


  return (
    <DialogInfo
      hookOpen = {O}
      title    = 'Название листа'
      maxWidth = 'xs'
      onClose  = {handlerClose}
    >
      <Content
        ref            = {sheetTitleRef as any}
        selectedIconId = {sheetIconId}
        onSelectIcon   = {setSheetIconId}
      />
      <Actions
        editId         = {editId}
        hookOpen       = {O}
        selectedIconId = {sheetIconId}
        ref            = {sheetTitleRef as any}
      />
    </DialogInfo>
  )
});

export default SetSheetModal;
