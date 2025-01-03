import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItemIndents } from './change-style-indents';
import { deleteFields } from 'shared/helpers/objects';



/** Отступы */
export const Indents: FC = memo(() => {
  const { stylesByCardItemId, setSelectedStyles } = useDashboardView();


  const handleSubmit = (field: ItemStylesField, value: number) => {
    const getFields = (arr: string[]) => arr.map(item => field[0] + item) as ItemStylesField[]
    const newStyles = {
      ...stylesByCardItemId,
      [field]: value,
    };

    let fields = [] as ItemStylesField[];

    // If p => delete (py, px, pt, pb, pl, pr) | if m => delete (my, mx, mt, mb, ml, mr)
    if (field === 'p' || field === 'm') {
      fields = getFields(['t', 'b', 'l', 'r', 'y', 'x']);
    }
    // If py | my => delete p, pt, pb
    else if (field === 'py' || field === 'my') {
      fields = getFields(['', 't', 'b']);
    }
    // If px | mx => delete p, pl, pr
    else if (field === 'px' || field === 'mx') {
      fields = getFields(['', 'l', 'r']);
    }
    // If pt | pb | mt | mb => delete p, py | m, my
    else if (field === 'pt' || field === 'pb' || field === 'mt' || field === 'mb') {
      fields = getFields(['', 'y']);
    }
    // If pl | pr | ml | mr => delete p, px | m, mx
    else if (field === 'pl' || field === 'pr' || field === 'ml' || field === 'mr') {
      fields = getFields(['', 'x']);
    }
    
    deleteFields(newStyles, fields);
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
