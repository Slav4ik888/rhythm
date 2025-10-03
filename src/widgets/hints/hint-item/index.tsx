import { FC, memo, useState, useEffect, useRef, useCallback } from 'react'
import Box from '@mui/material/Box';
import { Hint, Position, DEFAULT_POSITION } from 'entities/hints';
import { Button } from 'shared/ui/buttons';
import { getArrowStyle, useStyles } from './styles';
import { calculateOptimalPosition } from './utils';
import { useUI } from 'entities/ui';
import { Divider } from 'shared/ui/mui-components';
import { useTheme } from 'app/providers/theme';



interface Props {
  hint            : Hint
  leftHints       : number // Осталось подсказок
  onCloseHint     : () => void
  onDontShowAgain : () => void
}


export const HintContainer: FC<Props> = memo(({ hint, leftHints, onDontShowAgain, onCloseHint }) => {
  const { isMobile } = useUI();
  const sx = useStyles(useTheme(), isMobile);
  const [position, setPosition] = useState<Position>(DEFAULT_POSITION);
  const hintRef = useRef<HTMLDivElement>(null);
  const targetElement = document.getElementById(hint.id);

  // Функция обновления позиции
  const updatePosition = useCallback(() => {
    if (targetElement && hintRef.current) {
      const newPosition = calculateOptimalPosition(
        hint.id,
        targetElement,
        hintRef.current,
        isMobile
      );
      setPosition(newPosition);
    }
  },
    [targetElement, isMobile, hint.id]
  );


  // Слушаем события скролла и ресайза
  useEffect(() => {
    if (! targetElement) return;

    updatePosition();

    // Троттлинг для производительности
    let ticking = false;
    const handleScroll = () => {
      if (! ticking) {
      requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', updatePosition);
    };
  },
    [targetElement, updatePosition]
  );


  useEffect(() => {
    if (targetElement && hintRef.current) {
      updatePosition();
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [targetElement]
  );


  if (! targetElement) return null;


  return (
    <Box sx={sx.overlay}>
      <Box
        ref={hintRef}
        style={{
          top  : `${position.top}px`,
          left : `${position.left}px`,
        }}
        sx={{
          ...sx.container,
          ...(position.arrowPosition === 'none' ? sx.noArrow : {})
        }}
      >
        {/* Стрелка-указатель (скрываем, если элемент не виден) */}
        {
          position.arrowPosition !== 'none' && (
            <Box
              sx={{ ...sx.arrow, ...sx[`arrow__${position.arrowPosition}`] }}
              style={getArrowStyle(position.arrowPosition, position.arrowOffset)}
            />
          )
        }
        <Box sx={sx.content}>
          {/* Контент подсказки */}
          <Box sx={sx.title}>
            {hint.title}
          </Box>

          <Divider />

          <Box sx={sx.text}>
            {hint.text}
          </Box>
          {
            hint.attention && <Box sx={sx.attention}>
              {hint.attention}
            </Box>
          }
          {/* Прогресс (опционально) */}
          {/* {leftHints && <Box sx={sx.leftHints}>{`Осталось: ${leftHints}`}</Box>} */}

          {/* Кнопки действий */}
          <Box sx={sx.actions}>
            <Button
              text    = 'Больше не показывать'
              variant = 'text'
              sx      = {sx.btnDontShow}
              onClick = {onDontShowAgain}
            />
            <Button
              text    = 'Понятно'
              onClick = {onCloseHint}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
})
