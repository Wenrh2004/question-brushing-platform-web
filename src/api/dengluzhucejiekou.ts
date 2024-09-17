// @ts-ignore
/* eslint-disable */
import request from '@/libs/request';

/** 登录 POST /web/login */
export async function loginUsingPost(
  body: API.LoginAndRegisterDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultLoginVO_>('/web/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退出登录 POST /web/logout */
export async function logoutUsingPost(options?: { [key: string]: any }) {
  return request<API.ResultString_>('/web/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 注册 POST /web/register */
export async function registerUsingPost(
  body: API.LoginAndRegisterDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultString_>('/web/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
