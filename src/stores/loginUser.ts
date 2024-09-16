import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/stores/index";
import request from '@/libs/request';
import ACCESS_ENUM from "@/access/accessEnum";


// 默认用户
const DEFAULT_USER: API.UserAddDTO = {
  // userName: "未登录",
  // // userProfile: "暂无简介",
  // userAvatar: "/assets/notLoginUser.png",
  userRole: ACCESS_ENUM.NOT_LOGIN,
};

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
