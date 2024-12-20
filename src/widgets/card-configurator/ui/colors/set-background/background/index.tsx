import { FC, memo, useState, MouseEvent } from 'react';
import { ConfiguratorTextfieldItem } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';



const getLinerGradient = (deg: string | number, main: string | number, state: string | number) =>
  `linear-gradient(${deg}deg, ${main}, ${state})`;


interface Props {
  defaultValue : number | string | undefined
  gradients    : string[]
  onChange     : (field: ItemStylesField, value: number | string) => void
}


/** background linear-gradient*/
export const SetLinearGradient: FC<Props> = memo(({ defaultValue = '', gradients, onChange }) => {
  const [deg, setDeg]     = useState(gradients[0] || 15);
  const [main, setMain]   = useState(gradients[1] || defaultValue as string);
  const [state, setState] = useState(gradients[2] || defaultValue as string);


  const handleDeg = (e: MouseEvent, value: string | number) => {
    setDeg(value);
    onChange('background', getLinerGradient(value, main, state));
  };

  const handleGrainentMain = (value: string) => {
    setMain(value);
    onChange('background', getLinerGradient(deg, value, state));
  };

  const handleGrainentState = (value: string) => {
    setState(value);
    onChange('background', getLinerGradient(deg, main, value));
  };


  return (
    <>
      <ConfiguratorTextfieldItem
        type         = 'number'
        defaultValue = {deg}
        toolTitle    = 'Угол поворота градиента'
        width        = '50px'
        onCallback   = {handleDeg}
        onSubmit     = {handleDeg}
      />
      <ColorPicker
        defaultColor = {main}
        onChange     = {handleGrainentMain}
      />
      <ColorPicker
        defaultColor = {state}
        onChange     = {handleGrainentState}
      />
    </>
  )
});
