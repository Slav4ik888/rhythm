import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { serviceUpdateUser, serviceLogout } from 'features/user';
import { updateObject } from 'shared/helpers/objects';
// import { updateObject } from 'shared/helpers/objects';
import { getPayloadError as getError } from 'shared/lib/errors';
import { LS } from 'shared/lib/local-storage';
import { Errors } from 'shared/lib/validators';
import { creatorUser } from '../creators';
import { getStartResourseData } from '../services';
import { StateSchemaUser, User } from '../types';
import { SetUser } from './types';


const initialState: StateSchemaUser = {
  // _isInit        : false,
  loading : false,
  errors  : {},
  auth    : false,
  user    : {} as User
};



export const slice = createSlice({
  name: 'entities/user',
  initialState,
  reducers: {
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = getError(payload);
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    setAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.auth = payload;
    },
    setUser: (state, { payload }: PayloadAction<SetUser>) => {
      state.auth = true;
      state.user = creatorUser(payload.user);
      LS.setUserState(payload.companyId, state);
    }
  },

  extraReducers: builder => {
    // GET-USER-AND-COMPANY
    // eslint-disable-line @typescript-eslint/no-unused-expressions
    builder
      .addCase(getStartResourseData.pending, (state) => {
        state.errors  = {};
        state.loading = true;
      })
      .addCase(getStartResourseData.fulfilled, (state, { payload }) => {
        // state._isInit       = true;
        state.auth    = true;
        state.user    = payload.user;
        state.errors  = {};
        state.loading = false;
        LS.setUserState(payload.companyId, state);
      })
      .addCase(getStartResourseData.rejected, (state, { payload }) => {
        // state._isInit = true;
        state.errors  = payload || {};
        state.loading = false;
      })

    // UPDATE-USER
    builder
      .addCase(serviceUpdateUser.pending, (state) => {
        state.errors  = {};
        state.loading = true;
      })
      .addCase(serviceUpdateUser.fulfilled, (state, { payload }) => {
        state.user    = updateObject(state.user, payload);
        state.errors  = {};
        state.loading = false;
      })
      .addCase(serviceUpdateUser.rejected, (state, { payload }) => {
        state.errors  = getError(payload);
        state.loading = false;
      })

    // DELETE-USER
    // builder
    //   .addCase(deleteUser.pending, (state) => {
    //     state.errors  = {};
    //     state.loading = true;
    //   })
    //   .addCase(deleteUser.fulfilled, (state) => {
    //     state.errors  = {};
    //     state.loading = false;
    //   })
    //   .addCase(deleteUser.rejected, (state, { payload }) => {
    //     state.errors  = payload;
    //     state.loading = false;
    //   })

    // LOGOUT-USER
    builder
      .addCase(serviceLogout.pending, (state) => {
        state.errors  = {};
        state.loading = true;
      })
      .addCase(serviceLogout.fulfilled, (state) => {
        state.auth    = false;
        state.user    = {} as User;
        state.errors  = {};
        state.loading = false;
      })
      .addCase(serviceLogout.rejected, (state, { payload }) => {
        state.errors  = payload || {};
        state.loading = false;
      })

    // SEND-EMAIL-CONFIRMATION
    // builder
    //   .addCase(sendEmailConfirmation.pending, (state) => {
    //     state.errors  = {};
    //     state.loading = true;
    //   })
    //   .addCase(sendEmailConfirmation.fulfilled, (state) => {
    //     state.errors  = {};
    //     state.loading = false;
    //   })
    //   .addCase(sendEmailConfirmation.rejected, (state, { payload }) => {
    //     state.errors  = payload;
    //     state.loading = false;
    //   })
  }
})

export const { actions, reducer } = slice;
