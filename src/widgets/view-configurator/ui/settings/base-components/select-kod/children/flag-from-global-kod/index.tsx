import { FC, memo } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { FlagByScheme } from '../../../../../base-features-components/by-scheme/flag-by-scheme';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
}

export const FlagFromGlobalKod: FC<Props> = memo(({ selectedItem, scheme }) => (
  <FlagByScheme
    scheme       = {scheme}
    title        = 'fromGlobalKod'
    // eslint-disable-next-line max-len
    toolTitle    = {`"fromGlobalKod" - если true, то kod будет автоматически подтягиваться от ближайшего parent
 у которых стоит галка (isGlobalKod)`}
    selectedItem = {selectedItem}
  />
));
