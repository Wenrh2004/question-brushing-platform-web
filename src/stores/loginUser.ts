import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/stores/index";
import request from '@/libs/request';
// import ACCESS_ENUM from "@/access/accessEnum";
import {DEFAULT_USER} from "@contants/user"


/**
 * 登录用户全局状态
 */
export const loginUserSlice = createSlice({
  name: "loginUser",
  initialState: DEFAULT_USER,
  reducers: {
    setLoginUser: (state, action: PayloadAction<API.UserAddDTO>) => {
      return {
        ...action.payload,
      };
    },
  },
});

// 修改状态
export const { setLoginUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;
