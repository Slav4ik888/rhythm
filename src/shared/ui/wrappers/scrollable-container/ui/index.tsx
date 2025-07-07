import Box from '@mui/material/Box';
import { ReactNode, useRef, useState, useEffect, useCallback } from 'react';
import { styles } from './styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';



interface Props {
  children: ReactNode
}

/**
 * Плавный скролл вправо/влево
 * Адаптивные кнопки - появляются при наведении и скрываются когда скролл невозможен
 * Кнопки активируются только когда есть куда скроллить
 */
export const ScrollableWorkspace: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);


  // Проверяем, можно ли скроллить влево/вправо
  const updateScrollState = useCallback(() => {
    if (! containerRef.current) return

    const {
      scrollWidth,  // Полная ширина контента (включая скрытое)
      clientWidth,  // Видимая ширина (без полосы прокрутки) // window.innerWidth); // – ширина viewport.
      scrollLeft,   // Текущий горизонтальный скролл
    } = containerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  }, []);


  // Вешаем обработчики мыши
  useEffect(() => {
    if (! containerRef.current) return;

    window.addEventListener('mousemove', updateScrollState);

    return () => {
      window.removeEventListener('mousemove', updateScrollState);
    };
  }, [updateScrollState]);


  // Плавный скролл по кнопкам
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  }, []);


  // Обработчик скролла (колесико или полоса прокрутки)
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollState);
      return () => container.removeEventListener('scroll', updateScrollState);
    }
  }, [updateScrollState]);


  return (
    <Box id='scrollable' sx={styles.container}>
      {canScrollLeft && (
        <Box
          sx           = {{ ...styles.arrow, ...styles.leftArrow }}
          onMouseEnter = {() => scroll('left')}
          onClick      = {() => scroll('left')}
        >
          <NavigateBeforeIcon sx={styles.iconLeft} />
        </Box>
      )}

      <Box id='containerRef' sx={styles.workspace} ref={containerRef}>
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
