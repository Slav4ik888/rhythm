import { FC, memo } from 'react';
import { MDDivider } from 'shared/ui/mui-design-components';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { BorderStyleType, CardItemId, ItemStyles, ItemStylesField } from 'entities/card-item';
import { useDashboard } from 'entities/dashboard';
import { useCompany } from 'entities/company';
import { Border } from './border';
import { BorderRadius } from './border-radius';



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';


interface Props {
  styles     : ItemStyles
  cardItemId : CardItemId
  onChange     : (field: ItemStylesField, value: number | string) => void
}

/** Рамки */
export const Borders: FC<Props> = memo(({ styles, cardItemId, onChange }) => {
  const { companyId } = useCompany();
  const { } = useDashboard({ cardItemId });



  return (
    <>
      <SubHeader title='Рамка'/>
      <Border
        borderStyle = {styles.borderStyle}
        borderWidth = {styles.borderWidth}
        borderColor = {styles.borderColor}
        onChange    = {onChange}
      />
      <BorderRadius
        defaultValue = {styles.borderRadius}
        onChange     = {onChange}
      />
      
      {/* border-color */}
      {/* shaddow */}
      <MDDivider mt={1} />
    </>
  )
});
