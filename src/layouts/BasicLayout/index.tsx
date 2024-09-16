"use client"; 
import {GithubFilled,LogoutOutlined,SearchOutlined,} from '@ant-design/icons';
import {ProLayout,} from '@ant-design/pro-components';
import {Dropdown,Input,} from 'antd';
import React from 'react';
import Image from 'next/image'; 
import Link from "next/link"
import { usePathname } from 'next/navigation';
import GlobalFooter from '@/components/GlobalFooter';
import './index.css';
import {menus} from '../../../config/menu';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import loginUserSlice from '../../stores/loginUser';
import getAccessibleMenus from '@/access/menuAccess';

  

  // 搜索条
  function SearchInput() {
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      } }
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        prefix={<SearchOutlined />}
        placeholder="搜索题目"
        variant="borderless" />
    </div>
  );
}
  
  interface Props {
    children:React.ReactNode;
  }
  /**
   * 
   * 通用布局
   * */
  export default function BaicLayout ({ children} : Props)  {
    const pathname = usePathname();

    // 获取用户登录信息
    const loginUser = useSelector((state:RootState) => state.loginUser);

    return (
      <div
        id="tbasicLayout"
        style={{
          height: '100vh',
          overflow: 'auto',
        }}
      >
            <ProLayout
            title="面试鸭刷题平台"
            layout="top"
            logo={
              <Image src="/assets/Loga.png" height={32} width={32} alt="面试刷题平台" />
            }
              location={{
                pathname,
              }}
              avatarProps={{
                src: loginUser.userAvatar || 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                size: 'small',
                title: loginUser.userName || 'QIT',
                render: (props: any, dom: any) => {
                  return (
                    <Dropdown
                      menu={{
                        items: [
                          {
                            key: 'logout',
                            icon: <LogoutOutlined />,
                            label: '退出登录',
                          },
                        ],
                      }}
                    >
                      {dom}
                    </Dropdown>
                  );
                },
              }}
              actionsRender={(props: { isMobile: any; }) => {
                if (props.isMobile) return [];
                return [
                    <SearchInput key="search" />,
                  <a key="github" href="https://github.com/liyupi/mianshiya-next" target="_blank">
                      <GithubFilled key="GithubFilled" />,
                  </a>
                  ,
                ];
              }}
              headerTitleRender={(logo: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, _: any) => {
              // headerTitleRender={(logo, title, _) => {
                return (
                  <a>
                    {logo}
                    {title}
                  </a>
                );
              }}
              //底部栏
              footerRender={() => {
                return <GlobalFooter />;
              }}
              onMenuHeaderClick={(e: any) => console.log(e)}
              //定义菜单
              menuDataRender={() => {
                return getAccessibleMenus(menus);
              }}
              menuItemRender={(item: { path: any; target: string | (string & {}) | undefined; }, dom: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => (
                <Link
                   href={item.path || ''}
                   target={item.target}
                >
                  {dom}
                </Link>
              )}
            >
              {JSON.stringify(loginUser)}
              {children}

            </ProLayout>
      </div>
    );
  };