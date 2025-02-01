import { FC, memo } from 'react';
import { RowFlagByScheme, RowInputByScheme, RowSelectByField, SelectByField } from '../../base-features-components';
import { SelectKod } from '../select-kod';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { arrayEndingDiffType, arrayEndingType } from 'entities/dashboard-view';



/** Вкладка Settings for DigitIndicator */
export const CardItemDigitIndicatorSettingsConfigurator: FC = memo(() => {


  return (
    <>
      <SubHeader title='Общие настройки'>
        <SelectKod />
        <RowFlagByScheme
          scheme    = 'settings.plusMinus'
          title     = 'plusMinus'
          toolTitle = 'Показывать знаки [+/-] при росте/падении'        
        />
        <RowFlagByScheme
          scheme    = 'settings.growthColor'
          title     = 'growthColor'
          toolTitle = 'Красить зелёным при росте / красным при падении'        
        />
      </SubHeader>

      <SubHeader title='Разряды'>
        <RowFlagByScheme
          scheme    = 'settings.reduce'
          title     = 'reduce'
          toolTitle = 'Убрать разряды: 12 500 700 => 12.5 млн'        
        />
        <RowFlagByScheme
          scheme    = 'settings.noSpace'
          title     = 'noSpace'
          toolTitle = 'Убрать пробелы между разрядами: 12 500 => 12500'        
        />
        <RowInputByScheme
          scheme    = 'settings.fractionDigits'
          type      = 'number'
          title     = 'fractionDigits'
          toolTitle = 'Количество знаков после запятой'
        />
        <RowFlagByScheme
          scheme    = 'settings.addZero'
          title     = 'addZero'
          toolTitle = 'Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков'        
        />
      </SubHeader>

      <SubHeader title='Prefix'>
        <RowSelectByField
          scheme    = 'settings.endingType'
          title     = 'endingType'
          toolTitle = ''
          array     = {arrayEndingType}
        />
        <RowSelectByField
          scheme    = 'settings.endingDiffType'
          title     = 'endingDiffType'
          toolTitle = ''
          array     = {arrayEndingDiffType}
        />
      </SubHeader>
    </>
  )
});
