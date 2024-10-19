import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { updateObject } from 'shared/helpers/objects';
import { getPayloadError as getError } from 'shared/lib/errors';
import { Errors } from 'shared/lib/validators';
import { creatorUser } from '../creators';
import {
  // deleteUser,
  getStartResourseData, logout,
  // sendEmailConfirmation, updateUser
} from '../services';
import { StateSchemaUser, User } from '../types';


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
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.auth = true;
      state.user = creatorUser(payload);
    }
  },

  extraReducers: builder => {
    // GET-USER-AND-COMPANY
    builder
      .addCase(getStartResourseData.pending, (state) => {
        state.errors  = {};
        state.loading = true;
      })
      .addCase(getStartResourseData.fulfilled, (state, { payload }) => {
        // state._isInit       = true;
        state.auth    = true;
        state.user    = payload;
        state.errors  = {};
        state.loading = false;
      })
      .addCase(getStartResourseData.rejected, (state, { payload }) => {
        // state._isInit = true;
        state.errors  = payload || {};
        state.loading = false;
      })

    // UPDATE-USER
    // builder
    //   .addCase(updateUser.pending, (state) => {
    //     state.errors  = {};
    //     state.loading = true;
    //   })
    //   .addCase(updateUser.fulfilled, (state, { payload }) => {
    //     state.user    = updateObject(state.user, payload);
    //     state.errors  = {};
    //     state.loading = false;
    //   })
    //   .addCase(updateUser.rejected, (state, { payload }) => {
    //     state.errors  = payload;
    //     state.loading = false;
    //   }),
    
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
      .addCase(logout.pending, (state) => {
        state.errors  = {};
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.auth    = false;
        state.user    = {} as User;
        state.errors  = {};
        state.loading = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
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