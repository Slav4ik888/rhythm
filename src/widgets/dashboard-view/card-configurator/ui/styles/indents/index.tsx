import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStyles, ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItemIndents } from './change-style-indents';



/** Отступы */
export const Indents: FC = memo(() => {
  const { stylesByCardItemId, setSelectedStyles } = useDashboardView();


  const handleSubmit = (field: ItemStylesField, value: number | string) => {
    let newStyles: ItemStyles = {
      ...stylesByCardItemId,
      [field]: value,
    };

    /** Проверяем есть ли такое поле и если есть обнуляем */
    const setEmpty = (field: any) => {
      if (newStyles?.[field as ItemStylesField] === undefined) return
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
  };


  return (
    <SubHeader title='Отступы'>
      <ChangeStyleItemIndents
        bold
        title      = 'margin'
        toolTitle  = 'Отступ вокруг элемента'
        baseField  = 'm'
        onChange   = {handleSubmit}
      />
      <ChangeStyleItemIndents
        bold
        title      = 'padding'
        toolTitle  = 'Отступ внутри элемента'
        baseField  = 'p'
        onChange   = {handleSubmit}
      />
    </SubHeader>
  )
});
