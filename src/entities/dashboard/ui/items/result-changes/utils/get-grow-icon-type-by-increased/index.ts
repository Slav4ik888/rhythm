import { Increased } from '../../../../../model/types';


type GrowIconType = 'growth' | 'fall' | 'unchanged'

export const getGrowIconTypeByIncreased = (
  increased       : Increased,
  unchangedBlack? : boolean // При отсутствии изменений в результатах красить чёрным цветом
): GrowIconType => {
  switch (increased) {
    case 1  : return 'growth'
    case -1 : return 'fall'
    default : return unchangedBlack ? 'unchanged' : 'fall'
  }
};
