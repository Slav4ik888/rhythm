import { Errors } from 'shared/lib/validators';
import { Message } from '../types/messages';
import { ScreenFormats } from '../types/screen-formats';


export interface StateSchemaUI {
  // UI
  loading        : boolean

  errors         : Errors
  errorStatus    : number

  // Page Loader
  pageLoading    : boolean
  pageText       : string

  // Messages
  message        : Message

  // Screens
  screenFormats  : ScreenFormats
  screenSize     : number

  // Settings
  acceptedCookie : boolean
  replacePath    : string  // For replace after login or signup
}
