import { CustomTheme } from 'app/providers/theme';
import { Increased } from 'entities/dashboard-data';
import { getGrowIconTypeByIncreased } from '../../../../growth-icon/model/utils/get-grow-icon-type-by-increased';


/** Цвет исходя рост или падение */
export const getColorByIncreased = (
  { palette }     : CustomTheme,
  increased       : Increased,
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом
) => {
  const type = getGrowIconTypeByIncreased(increased, unchangedBlack);

  return palette[type].main;
};
