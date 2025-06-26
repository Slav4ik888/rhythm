import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cfg from 'app/config';
import { LS } from 'shared/lib/local-storage';
import { isNotUndefined, Errors } from 'shared/lib/validators';
import { Message, MessageType } from '../types';
import { getScreenFormats, getScreenSize, isAcceptCookie } from '../utils';
import { StateSchemaUI } from './state-schema';
import { SetPageText } from './types';



const initialState: StateSchemaUI = {
  loading        : false,
  pageLoading    : false,
  pageText       : '',
  errors         : {},
  errorStatus    : 0,
  message        : {} as Message,   // Current message for display
  screenFormats  : getScreenFormats(getScreenSize()), // Сurrent screen format
  screenSize     : getScreenSize(), // Сurrent screen length
  replacePath    : '',              // For replace after login or signup
  acceptedCookie : isAcceptCookie() // Разрешение user use cookie
};


export const slice = createSlice({
  name: 'entities/ui',
  initialState,
  reducers: {
    // UI
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors      = payload;
      state.pageText    = '';
      state.pageLoading = false;
    },
    setErrorStatus: (state,
      { payload: { status, pathname } }: PayloadAction<{ status: number, pathname?: string }>) => {
      state.errorStatus = status;
      if (pathname) state.replacePath = pathname;

      state.pageText    = '';
      state.pageLoading = false;
    },

    // PAGE LOADER
    setPageLoading: (state, { payload }: PayloadAction<boolean | undefined>) => {
      const loading = isNotUndefined(payload) ? payload as boolean : true;
      state.pageLoading = loading;
    },
    setPageText: (state, { payload }: PayloadAction<SetPageText>) => {
      const text = isNotUndefined(payload.text) ? payload.text as string : '';
      // console.log('___ [', payload.name, ']', payload.text);

      state.pageText = text;
      state.pageLoading = Boolean(text);
    },

    // MESSAGES
    setMessage: (state, { payload }: { payload: Message }) => {
      state.message     = payload;
      state.pageText    = '';
      state.pageLoading = false;
    },

    setInfoMessage: (state, { payload }: { payload: string }) => {
      state.pageText    = '';
      state.pageLoading = false;
      state.message     = {
        type    : MessageType.INFO,
        message : payload,
        timeout : cfg.DEFAULT_MESSAGE_TIMEOUT
      };
    },
    setSuccessMessage: (state, { payload }: { payload: string }) => {
      state.pageText    = '';
      state.pageLoading = false;
      state.message     = {
        type    : MessageType.SUCCESS,
        message : payload,
        timeout : cfg.DEFAULT_MESSAGE_TIMEOUT
      };
    },
    setWarningMessage: (state, { payload }: { payload: string }) => {
      state.pageText    = '';
      state.pageLoading = false;
      state.message     = {
        type    : MessageType.WARNING,
        message : payload,
        timeout : cfg.DEFAULT_MESSAGE_TIMEOUT
      };
    },
    setErrorMessage: (state, { payload }: { payload: string }) => {
      state.pageText    = '';
      state.pageLoading = false;
      state.message     = {
        type    : MessageType.ERROR,
        message : payload,
        timeout : cfg.DEFAULT_MESSAGE_TIMEOUT
      };
    },
    clearMessage: (state) => {
      state.message     = {} as Message;
      state.pageText    = '';
      state.pageLoading = false;
    },

    // SCREENS
    setScreenFormats: (state, { payload }: PayloadAction<number>) => {
      state.screenFormats = getScreenFormats(payload);
      state.screenSize    = payload;
    },
    setScreenSize: (state, { payload }: PayloadAction<number>) => {
      state.screenSize = payload;
    },

    // SETTINGS
    setReplacePath: (state, { payload }: PayloadAction<string>) => {
      state.replacePath = payload;
      state.pageText    = '';
      state.pageLoading = false;
    },
    clearReplacePath: (state) => {
      state.replacePath = '';
      state.pageText    = '';
      state.pageLoading = false;
    },

    setAcceptedCookie: (state, { payload }: PayloadAction<boolean>) => {
      state.acceptedCookie = payload;
      LS.setAcceptedCookie();
    }
  }
})

export const { actions, reducer } = slice;
