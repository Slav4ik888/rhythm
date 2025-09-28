import { FC, memo } from 'react'
import Box from '@mui/material/Box';
import { Hint } from 'entities/hints';
import { Button } from 'shared/ui/buttons';


const useStyles = () => ({
  overlay: {
    position : 'absolute',
    top      : 0,
    left     : 0,
    zIndex   : 2000,
  },
  content: {

  },
  leftHints: {

  },
  title: {

  },
  text: {

  },
  attention: {

  },
  actions: {

  },
  btn: {

  },
});


interface Props {
  hint            : Hint
  leftHints       : number // Осталось подсказок
  onCloseHint     : () => void
  onDontShowAgain : () => void
}


export const HintContainer: FC<Props> = memo(({ hint, leftHints, onDontShowAgain, onCloseHint }) => {
  const sx = useStyles();

  // Ваша существующая логика позиционирования подсказки

  return (
    <Box sx={sx.overlay}>
      <Box sx={sx.content}>
        {/* Прогресс (опционально) */}
        {leftHints && <Box sx={sx.leftHints}>{`Осталось: ${leftHints}`}</Box>}

        {/* Контент подсказки */}
        <Box sx={sx.title}>
          {hint.title}
        </Box>
        <Box sx={sx.text}>
          {hint.text}
        </Box>
        {
          hint.attention && <Box sx={sx.attention}>
            {hint.attention}
          </Box>
        }

        {/* Кнопки действий */}
        <Box sx={sx.actions}>
          <Button
            text    = 'Больше не показывать'
            sx      = {sx.btn}
            onClick = {onDontShowAgain}
          />
          <Button
            text    = 'Понятно'
            sx      = {sx.btn}
            onClick = {onCloseHint}
          />
        </Box>
      </Box>
    </Box>
  );
})
