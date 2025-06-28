import { FC, memo, useCallback } from 'react';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { brown } from '@mui/material/colors';
import { Template, useDashboardTemplates } from 'entities/dashboard-templates';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { ActivatedCopiedType, useDashboardView } from 'entities/dashboard-view';
import { getCopyViewItem } from 'features/dashboard-view';
import { v4 as uuidv4 } from 'uuid';
import { Condition, creatorFixDate, updateEntities } from 'entities/base';
import { useUser } from 'entities/user';
import { AddBtn } from 'shared/ui/configurators-components';



interface Props {
  type: ActivatedCopiedType
}

/** Кнопка копирования (предварительно - не в БД) SelectedItem в шаблоны */
export const CopyToTemplatesBtn: FC<Props> = memo(({ type }) => {
  console.log('CopyToTemplatesBtn');
  const isAll = type === 'copyItemsAll';
  const { userId } = useUser();
  const { setOpened, setTemplate } = useDashboardTemplates();
  const { selectedItem, viewItems } = useDashboardView();


  const handleClick = useCallback(() => {
    console.log('handleClick');
    const templateId = uuidv4();

    const copiedViewItems = getCopyViewItem(
      { type, id: selectedItem.id },
      templateId,
      viewItems,
      userId
    );

    const template: Template = {
      id         : templateId,
      condition  : Condition.DRAFT, // На период редактирования (до сохранения в БД)
      type       : selectedItem.type,
      order      : 1000, // TODO: в конец его типа (type)
      viewItems  : updateEntities({}, copiedViewItems),
      createdAt  : creatorFixDate(userId),
      lastChange : creatorFixDate(userId)
    };

    setTemplate(template);
    console.log('template: ', template);

    setOpened({ opened: true, selectedId: templateId }); // Чтобы он сразу открылся в окне
  },
    [userId, type, selectedItem, viewItems, setOpened, setTemplate]
  );


  return (
    <AddBtn
      toolTitle = {
        `Добавить ${isAll ? '' : 'только'} этот элемент ${isAll ? '(со всеми вложенными элементами) ' : ''}в "Шаблоны"`
      }
      title     = {isAll ? 'All' : '1'}
      color     = {brown[600]}
      startIcon = {CollectionsBookmarkIcon}
      onClick   = {handleClick}
    />
  )
});
