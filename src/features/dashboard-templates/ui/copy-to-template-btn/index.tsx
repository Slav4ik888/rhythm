import { FC, memo, useCallback } from 'react';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { Template, useDashboardTemplates, MAX_COUNT_BUNCH_TEMPLATES } from 'entities/dashboard-templates';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { ActivatedCopiedType, useDashboardViewState } from 'entities/dashboard-view';
import { getCopyViewItem } from 'features/dashboard-view';
import { v4 as uuidv4 } from 'uuid';
import { creatorFixDate, updateEntities } from 'entities/base';
import { useUser } from 'entities/user';
import { AddBtn } from 'shared/ui/configurators-components';
import { findAvailableBunchId } from 'shared/lib/structures/bunch';
import { useTheme } from 'app/providers/theme';



interface Props {
  type: ActivatedCopiedType
}

/** Кнопка копирования (предварительно - не в БД) SelectedItem в шаблоны */
export const CopyToTemplatesBtn: FC<Props> = memo(({ type }) => {
  const isAll = type === 'copyItemsAll';
  const { userId } = useUser();
  const theme = useTheme();
  const { templates, setOpened, serviceUpdateTemplate } = useDashboardTemplates();
  const { selectedItem, viewItems } = useDashboardViewState();


  const handleClick = useCallback(() => {
    const templateId = uuidv4();

    const copiedViewItems = getCopyViewItem(
      { type, id: selectedItem.id },
      templateId,
      viewItems,
      userId
    );

    // Adding bunchId to copied items
    const availableBunchId  = findAvailableBunchId(templates, MAX_COUNT_BUNCH_TEMPLATES);
    const bunchId           = availableBunchId ? availableBunchId : uuidv4();
    const copiedWithBunchId = copiedViewItems.map(item => ({ ...item, bunchId: '' }));


    const template: Template = {
      id         : templateId,
      bunchId,
      type       : selectedItem.type,
      order      : 1000, // TODO: в конец его типа (type)
      viewItems  : updateEntities({}, copiedWithBunchId),
      createdAt  : creatorFixDate(userId),
      lastChange : creatorFixDate(userId)
    };

    serviceUpdateTemplate({
      bunchUpdatedMs : Date.now(),
      bunchAction    : availableBunchId ? 'update' : 'create',
      template
    });


    setOpened({ opened: true, selectedId: templateId }); // Чтобы он сразу открылся в окне
  },
    [userId, type, templates, selectedItem, viewItems, setOpened, serviceUpdateTemplate]
  );


  return (
    <AddBtn
      toolTitle = {
        `Добавить ${isAll ? '' : 'только'} этот элемент ${isAll ? '(со всеми вложенными элементами) ' : ''}в "Шаблоны"`
      }
      title     = {isAll ? 'All' : '1'}
      color     = {theme.palette.template.color}
      startIcon = {CollectionsBookmarkIcon}
      onClick   = {handleClick}
    />
  )
});
