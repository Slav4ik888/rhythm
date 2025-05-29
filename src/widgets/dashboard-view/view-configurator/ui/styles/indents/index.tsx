import { FC, memo, useCallback } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemStyles, ViewItemStylesField, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { ChangeStyleItemIndents } from './change-style-indents';
import { setFieldEmpty } from 'shared/helpers/objects';
import { GapsRow } from './gaps';



interface Props {
  selectedItem : ViewItem | undefined
}

/** Отступы */
export const Indents: FC<Props> = memo(({ selectedItem }) => {
  const { setSelectedStyles } = useDashboardView();


  const handleChange = useCallback((field: ViewItemStylesField, value: number | string) => {
    let newStyles: ViewItemStyles = {
      ...selectedItem?.styles,
      [field]: value,
    };

    // If p => clear (py, px, pt, pb, pl, pr) | if m => clear (my, mx, mt, mb, ml, mr)
    if (field === 'p' || field === 'm') {
      setFieldEmpty(newStyles, field + 't' as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field + 'b' as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field + 'r' as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field + 'l' as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field + 'y' as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field + 'x' as keyof ViewItemStyles);
    }
    // If py | my => clear p, pt, pb
    else if (field === 'py' || field === 'my') {
      setFieldEmpty(newStyles, field.slice(0, 1) as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field.slice(0, 1) + 't' as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field.slice(0, 1) + 'b' as keyof ViewItemStyles);
    }
    // If px | mx => clear p, pl, pr
    else if (field === 'px' || field === 'mx') {
      setFieldEmpty(newStyles, field.slice(0, 1) as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field.slice(0, 1) + 'r' as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field.slice(0, 1) + 'l' as keyof ViewItemStyles);
    }
    // If pt | pb | mt | mb => clear p, py | m, my
    else if (field === 'pt' || field === 'pb' || field === 'mt' || field === 'mb') {
      setFieldEmpty(newStyles, field.slice(0, 1) as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field.slice(0, 1) + 'y' as keyof ViewItemStyles);
    }
    // If pl | pr | ml | mr => clear p, px | m, mx
    else if (field === 'pl' || field === 'pr' || field === 'ml' || field === 'mr') {
      setFieldEmpty(newStyles, field.slice(0, 1) as keyof ViewItemStyles);
      setFieldEmpty(newStyles, field.slice(0, 1) + 'x' as keyof ViewItemStyles);
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
        onChange     = {handleChange}
      />
      <ChangeStyleItemIndents
        bold
        title        = 'padding'
        toolTitle    = 'Отступ внутри элемента'
        baseField    = 'p'
        selectedItem = {selectedItem}
        onChange     = {handleChange}
      />
      <GapsRow selectedItem={selectedItem} />
    </SubHeader>
  )
});
