import demoPecarColorsNight from '../../assets/demo-pecar-colors-hight.png';
import demoPecarColorsDay from '../../assets/demo-pecar-colors-day.png';

export const getImgByIdAndTheme = (id: number, darkMode: boolean) => {
  if (darkMode) {
    switch (id) {
      case 1: return demoPecarColorsNight;
      default: return '';
    }
  }
  else {
    switch (id) {
      case 1: return demoPecarColorsDay;
      default: return '';
    }
  }
};
