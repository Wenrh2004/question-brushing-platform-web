"use client"; 
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import BasicLayout from '../layouts/BasicLayout';
import React, { useCallback, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '@/stores'
import { AppDispatch } from '../stores/index';
import { setLoginUser } from '@/stores/loginUser';
import { getCurrentUserUsingGet } from '@/api/yonghujiekou';
import AccessLayout from '@/access/AccessLayout';

// 全局初始化

const InitLayout:React.FC<
Readonly<{
  children: React.ReactNode;
}>
> = ({children}) => {

  // 触发器
  const dispatch =  useDispatch<AppDispatch>();
  
  const doInitLoginUser = useCallback( async () => {
    // 初始化全局用户状态
    const res = await getCurrentUserUsingGet();
      if (res.data) {
        //更新用户全局状态
      } else {
        //清除用户全局状态
        
      }
    console.log('init');
}, []);
useEffect(() => {
  doInitLoginUser();
},[]);
return children
};
 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="zh"> 
      <body>
        <AntdRegistry>
          <Provider store={store}>
            <InitLayout>
                <BasicLayout>
                    <AccessLayout>
                          {children}
                    </AccessLayout>
                </BasicLayout>   
            </InitLayout>   
          </Provider>
      
        </AntdRegistry>        
      </body>
    </html>
  );
}
