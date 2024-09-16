// 全局权限校验拦截器

import { getCurrentUserUsingGet } from "@/api/yonghujiekou";
import { AppDispatch, RootState } from "@/stores";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginUser from '@/stores/loginUser';
import React from "react";
import { findAllMenuItemByPath } from "../../config/menu";
import ACCESS_ENUM from '@/access/accessEnum';
import checkAccess from "./checkAccess";
import Forbidden from "@/app/forbidden";


const InitLayout:React.FC<
Readonly<{
  children: React.ReactNode;
}>
> = ({children}) => {

    const pathname = usePathname();
    //当前登录用户
    const loginUser = useSelector((state:RootState) => state.loginUser);
    // 获取当前路径需要的权限
    const menu =  findAllMenuItemByPath(pathname);
    const needAccess = menu?.access ?? ACCESS_ENUM.NOT_LOGIN; 
    // 校验权限
    const canAccess =  checkAccess(loginUser, needAccess);
    if (!canAccess) {
      return <Forbidden />;
    }


//   // 触发器
//   const dispatch =  useDispatch<AppDispatch>();
  
//   const doInitLoginUser = useCallback( async () => {
//     // 初始化全局用户状态
//     const res = await getCurrentUserUsingGet();
//       if (res.data) {
//         //更新用户全局状态
//       } else {
//         //清除用户全局状态
        
//       }
//     console.log('init');
// }, []);
// useEffect(() => {
//   doInitLoginUser();
// },[]);


return <>{children}</>;
};


export default AccessLayout;
