import { ComparisonIndicatorsConfig } from '../../ui/comparsion-indicators';
import { GrowthResultConfig } from '../../ui/growth-result';

export interface ResultChangesConfig {
  unchangedBlack?       : boolean // При отсутствии изменений в результатах красить чёрным цветом
  inverted?             : boolean // Если график перевёрнутый, то есть если задолженность уменьшается то это рост

  comparisonIndicators? : ComparisonIndicatorsConfig
  growthResult?         : GrowthResultConfig
}
