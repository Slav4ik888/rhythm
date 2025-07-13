import Box from '@mui/material/Box';
import { FC, ReactNode, useRef, useState, useEffect, useCallback } from 'react';
import { styles } from './styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useUIConfiguratorController } from 'app/providers/theme';



interface Props {
  children: ReactNode
}

/**
 * Плавный скролл вправо/влево
 * Адаптивные кнопки - появляются при наведении и скрываются когда скролл невозможен
 * Кнопки активируются только когда есть куда скроллить
 */
export const ScrollableWorkspace: FC<Props> = ({ children }) => {
  const [controller] = useUIConfiguratorController();
  const { leftOffsetScrollButton } = controller;
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null); // Для организации отступа слева


  // Проверяем, можно ли скроллить влево/вправо
  const updateScrollState = useCallback(() => {
    if (! containerRef.current) return

    const {
      scrollWidth,  // Полная ширина контента (включая скрытое)
      clientWidth,  // Видимая ширина (без полосы прокрутки) // window.innerWidth); // – ширина viewport.
      scrollLeft,   // Текущий горизонтальный скролл
    } = containerRef.current;

    console.log('111 : ', scrollWidth, clientWidth, scrollLeft);

    // Округляем, чтобы избежать субпиксельных расхождений
    const roundedScrollLeft = Math.floor(scrollLeft);
    const roundedMaxScroll = Math.floor(scrollWidth - clientWidth);

    setCanScrollLeft(roundedScrollLeft > 0);
    setCanScrollRight(roundedScrollLeft < roundedMaxScroll);
  },
    []
  );


  // Вешаем обработчики мыши
  // useEffect(() => {
  //   if (! containerRef.current) return;

  //   window.addEventListener('mousemove', updateScrollState);

  //   return () => {
  //     window.removeEventListener('mousemove', updateScrollState);
  //   };
  // }, [updateScrollState]);


  // Плавный скролл по кнопкам
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const scrollAmount = 400;
    const maxScroll = scrollWidth - clientWidth;

    const targetScroll = direction === 'left'
      ? Math.max(0, scrollLeft - scrollAmount)
      : Math.min(maxScroll, scrollLeft + scrollAmount);

    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  },
    []
  );


  // Вешаем только scroll + scrollend
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScrollEnd = () => updateScrollState();
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 100);
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('scrollend', handleScrollEnd);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('scrollend', handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, [updateScrollState]);

  // Обработчик скролла (колесико или полоса прокрутки)
  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener('scroll', updateScrollState);
  //     return () => container.removeEventListener('scroll', updateScrollState);
  //   }
  // }, [updateScrollState]);


  return (
    <Box
      id  = 'scrollable'
      ref = {parentRef}
      sx  = {styles.container}
    >
      {canScrollLeft && (
        <Box
          sx           = {{ ...styles.arrow, ...styles.leftArrow, left: `${leftOffsetScrollButton}px` }}
          onMouseEnter = {() => scroll('left')}
          onClick      = {() => scroll('left')}
        >
          <NavigateBeforeIcon sx={styles.iconLeft} />
        </Box>
      )}

      <Box
        id  = 'containerRef'
        ref = {containerRef}
        sx  = {styles.workspace}
      >
        {
          children
        }
      </Box>

      {canScrollRight && (
        <Box
          sx           = {{ ...styles.arrow, ...styles.rightArrow }}
          onMouseEnter = {() => scroll('right')}
          onClick      = {() => scroll('right')}
        >
          <NavigateNextIcon sx={styles.iconRight} />
        </Box>
      )}
    </Box>
  );
};
