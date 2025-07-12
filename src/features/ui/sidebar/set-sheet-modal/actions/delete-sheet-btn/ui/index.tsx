import { FC, memo, useCallback } from 'react';
import { useCompany } from 'entities/company';
import { DeleteButton } from 'shared/ui/buttons/delete-button';



interface Props {
  editId  : string  // sheetId if edit
  onClose : () => void
}

export const DeleteSheetBtn: FC<Props> = memo(({ editId, onClose }) => {
  const { paramsCompanyId, serviceDeleteSheet } = useCompany();


  const handleDel = useCallback(() => {
    // TODO: проверка наличия вложенных ViewItems
    // Нельзя удалять пока они есть
    serviceDeleteSheet({
      companyId : paramsCompanyId,
      sheetId   : editId
    });
    onClose();
  },
    [editId, paramsCompanyId, serviceDeleteSheet, onClose]
  );


  return (
    <DeleteButton
      icon
      toolTitle = 'Удалить этот лист'
      onDel     = {handleDel}
    />
  )
});
