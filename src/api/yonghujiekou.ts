// @ts-ignore
/* eslint-disable */
import request from '@/libs/request';

/** 新增用户 POST /user/add */
export async function addUsingPost1(body: API.UserAddDTO, options?: { [key: string]: any }) {
  return request<API.Result>('/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加用户签到记录 POST /user/addSignIn */
export async function addSignInUsingPost(options?: { [key: string]: any }) {
  return request<API.ResultBoolean_>('/user/addSignIn', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 单个删除用户 DELETE /user/deleteById/${param0} */
export async function deleteByIdUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`/user/deleteById/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量删除用户 DELETE /user/deleteByIds */
export async function deleteByIdsUsingDelete(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>('/user/deleteByIds', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id查询用户 GET /user/getById/${param0} */
export async function getByIdUsingGet2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGET2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`/user/getById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /user/getCurrentUser */
export async function getCurrentUserUsingGet(options?: { [key: string]: any }) {
  return request<API.Result>('/user/getCurrentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户签到记录 GET /user/getSignInRecord */
export async function getSignInRecordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSignInRecordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListInt_>('/user/getSignInRecord', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询用户 GET /user/selectByPage */
export async function selectByPageUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectByPageUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOUserVO_>('/user/selectByPage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改用户信息 PUT /user/update */
export async function updateUsingPut(body: API.UserDTO, options?: { [key: string]: any }) {
  return request<API.Result>('/user/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改当前用户信息 PUT /user/updateCurrentInfo */
export async function updateCurrentInfoUsingPut(
  body: API.UserDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/user/updateCurrentInfo', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改当前登录用户密码 PUT /user/updatePassword */
export async function updatePasswordUsingPut(
  body: API.UserUpdatePasswordDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/user/updatePassword', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
