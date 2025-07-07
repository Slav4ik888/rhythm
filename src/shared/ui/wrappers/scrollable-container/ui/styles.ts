import { f } from 'shared/styles';



export const styles = {
  container: {
    ...f('-c'),
    position : 'relative',
    maxWidth : '100vw', /* Не больше экрана */
    overflow : 'hidden',
  },
  workspace: {
    overflowX      : 'scroll',
    scrollBehavior : 'smooth',
    whiteSpace     : 'nowrap',
    width          : '100%',
    // '&::-webkit-scrollbar': {
    //   display: 'none'
    // }
  },
  leftArrow: {
    left: 0,
    borderRadius: '0 120px 120px 0', /* Скругление слева */
  },
  rightArrow: {
    right: 0, /* Прижат к правому краю */
    borderRadius: '120px 0 0 120px', /* Скругление справа */
  },
  arrow: {
    ...f('-c-c'),
    position: 'fixed', /* Фиксированное позиционирование */
    top: '50%',       /* Посередине по вертикали */
    transform: 'translateY(-50%)', /* Точное центрирование */
    width: '60px',    /* Ширина полукруга */
    height: '120px',  /* Высота (вдвое больше ширины) */
    background: '#dadada88',
    boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.3)', /* Тень для объёма */
    zIndex: 9999,  /* Поверх всех элементов */
    cursor: 'pointer', /* Указатель при наведении */
    '&:hover': {
      backgroundColor: '#dadada66',
    },
  },

  iconLeft: {
    fontSize : '3rem',
    color    : '#b4b4b4',
    ml       : -1,
  },
  iconRight: {
    fontSize : '3rem',
    color    : '#b4b4b4',
    ml       : 1,
  }
};
