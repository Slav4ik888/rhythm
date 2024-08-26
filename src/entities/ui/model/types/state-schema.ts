import { Errors } from 'shared/lib/validators';
import { Message } from './messages';
import { ScreenFormats } from './screen-formats';


export interface StateSchemaUI {
  // UI
  loading        : boolean
  pageLoading    : boolean // For PageLoader & block full display

  errors         : Errors
  errorStatus    : number

  message        : Message

  // Screens
  screenFormats  : ScreenFormats
  screenSize     : number

  // Settings
  acceptedCookie : boolean
  replacePath    : string  // For replace after login or signup
}
