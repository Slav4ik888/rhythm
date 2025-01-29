import { FC, memo } from 'react';
import { RowFlagByScheme, RowInputByScheme } from '../../base-features-components';
import { SelectKod } from '../select-kod';



/** Вкладка Settings for DigitIndicator */
export const CardItemDigitIndicatorSettingsConfigurator: FC = memo(() => {


  return (
    <>
      <SelectKod />
      <RowFlagByScheme
        scheme    = 'settings.plusMinus'
        title     = 'plusMinus'
        toolTitle = 'Показывать знак + при росте / - при падении'        
      />
      <RowFlagByScheme
        scheme    = 'settings.growthColor'
        title     = 'growthColor'
        toolTitle = 'Красить зелёным при росте / красным при падении'        
      />
      <RowFlagByScheme
        scheme    = 'settings.reduce'
        title     = 'reduce'
        toolTitle = 'Убрать разряды: 12 500 700 => 12.5 млн'        
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
    </>
  )
});
