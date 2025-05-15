import { FC, memo, useCallback } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemStyles, ViewItemStylesField, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { ChangeStyleItemIndents } from './change-style-indents';



interface Props {
  selectedItem : ViewItem | undefined
}

/** Отступы */
export const Indents: FC<Props> = memo(({ selectedItem }) => {
  const { setSelectedStyles } = useDashboardView();


  const handleSubmit = useCallback((field: ViewItemStylesField, value: number | string) => {
    let newStyles: ViewItemStyles = {
      ...selectedItem?.styles,
      [field]: value,
    };

    /** Проверяем есть ли такое поле и если есть обнуляем */
    const setEmpty = (field: any) => {
      if (newStyles?.[field as ViewItemStylesField] === undefined) return
      // @ts-ignore
      newStyles[field] = '';
    };


    // If p => clear (py, px, pt, pb, pl, pr) | if m => clear (my, mx, mt, mb, ml, mr)
    if (field === 'p' || field === 'm') {
      setEmpty(field + 't');
      setEmpty(field + 'b');
      setEmpty(field + 'r');
      setEmpty(field + 'l');
      setEmpty(field + 'y');
      setEmpty(field + 'x');
    }
    // If py | my => clear p, pt, pb
    else if (field === 'py' || field === 'my') {
      setEmpty(field.slice(0, 1));
      setEmpty(field.slice(0, 1) + 't');
      setEmpty(field.slice(0, 1) + 'b');
    }
    // If px | mx => clear p, pl, pr
    else if (field === 'px' || field === 'mx') {
      setEmpty(field.slice(0, 1));
      setEmpty(field.slice(0, 1) + 'r');
      setEmpty(field.slice(0, 1) + 'l');
    }
    // If pt | pb | mt | mb => clear p, py | m, my
    else if (field === 'pt' || field === 'pb' || field === 'mt' || field === 'mb') {
      setEmpty(field.slice(0, 1));
      setEmpty(field.slice(0, 1) + 'y');
    }
    // If pl | pr | ml | mr => clear p, px | m, mx
    else if (field === 'pl' || field === 'pr' || field === 'ml' || field === 'mr') {
      setEmpty(field.slice(0, 1));
      setEmpty(field.slice(0, 1) + 'x');
    }

    setSelectedStyles(newStyles);
  }, [selectedItem, setSelectedStyles]);


  return (
    <SubHeader title='Отступы'>
      <ChangeStyleItemIndents
        bold
        title        = 'margin'
        toolTitle    = 'Отступ вокруг элемента'
        baseField    = 'm'
        selectedItem = {selectedItem}
        onChange     = {handleSubmit}
      />
      <ChangeStyleItemIndents
        bold
        title        = 'padding'
        toolTitle    = 'Отступ внутри элемента'
        baseField    = 'p'
        selectedItem = {selectedItem}
        onChange     = {handleSubmit}
      />
    </SubHeader>
  )
});
