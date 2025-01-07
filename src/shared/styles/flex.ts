// v.2024-12-02

interface Flex {
  display         : 'flex'
  flexDirection?  : 'row' | 'column' | 'row-reverse' | 'column-reverse'
  alignItems?     : 'flex-start' | 'flex-end' | 'center' | 'baseline'
  justifyContent? : 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'baseline'
}


export const f = (str?: string): Flex => {
  const style: Flex = {
    display: 'flex'
  };


  let kod;

  if (! str) return style

  kod = str.split('-');

  switch (kod[0]) {
    case 'r':  style.flexDirection = 'row'; break;
    case 'c':  style.flexDirection = 'column'; break;
    case 'rr': style.flexDirection = 'row-reverse'; break;
    case 'cc': style.flexDirection = 'column-reverse'; break;
  }

  switch (kod[1]) {
    case 'c':  style.alignItems = 'center'; break;
    case 'fs': style.alignItems = 'flex-start'; break;
    case 'fe': style.alignItems = 'flex-end'; break;
    case 'b':  style.alignItems = 'baseline'; break;
  }

  switch (kod[2]) {
    case 'c':  style.justifyContent = 'center'; break;
    case 'fs': style.justifyContent = 'flex-start'; break;
    case 'fe': style.justifyContent = 'flex-end'; break;
    case 'sb': style.justifyContent = 'space-between'; break;
    case 'sa': style.justifyContent = 'space-around'; break;
    case 'b':  style.justifyContent = 'baseline'; break;
  }

  return style
};
