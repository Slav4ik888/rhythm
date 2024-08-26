import { CustomTheme } from 'app/providers/theme';
import { ScreenFormats } from 'entities/ui';
import { WrapperContainerType } from './types';



export const useStyles = (
  theme         : CustomTheme,
  screenFormats : ScreenFormats,
  type          : WrapperContainerType | undefined
) => {
  const
    ws            = type === WrapperContainerType.WS,
    document_body = type === WrapperContainerType.DOCUMENT_BODY,
    rule          = type === WrapperContainerType.RULE,
    isDesktop     = screenFormats?.isDesktop;

  return {
    root: {
      display         : 'flex',
      flexWrap        : ws ? 'wrap' : 'inherit',
      flexDirection   : document_body ? 'column' : 'row',
      width           : '100%',
      minHeight       : ws ? 266 : 50,
      height          : document_body ? '100%' : 'inherit',
      minWidth        : '100%', // isDesktop ? 1200 : 

      alignItems      : rule ? 'center' : 'inherit',
    
      border          : document_body ? theme.documents.wrapper.border : 
                        ws       ? '1px solid #d7d7d7' : 'none',

      borderRadius    : rule ? '4px' : '15px',

      color           : rule ? theme.ws.panel.color : 'inherit',
      backgroundColor : document_body ? theme.documents.wrapper.background :
                        ws ? '#f7f7f7' : 'inherit',
      
      p               : rule ? 1 : 2
    }
  }
};
