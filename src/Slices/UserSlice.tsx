import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'users',
  initialState: {
    userData: [],
  },
  reducers: {
    setUserDetail(state: any, action: any): any {
      state.userData = action?.payload;
    },
  },
});

export const {setUserDetail} = UserSlice.actions;
export default UserSlice.reducer;
