// @ts-ignore
/* eslint-disable */
import request from '@/libs/request';

/** 新增题库 POST /questionBank/add */
export async function addUsingPost(body: API.QuestionBankAddDTO, options?: { [key: string]: any }) {
  return request<API.Result>('/questionBank/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id删除题库 POST /questionBank/deleteById/${param0} */
export async function deleteByIdUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByIdUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`/questionBank/deleteById/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 批量删除题库 POST /questionBank/deleteByIds */
export async function deleteByIdsUsingPost(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>('/questionBank/deleteByIds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id查询题库 GET /questionBank/getById/${param0} */
export async function getByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`/questionBank/getById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询题库 GET /questionBank/selectByPage */
export async function selectByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOQuestionBankVO_>('/questionBank/selectByPage', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改题库 POST /questionBank/update */
export async function updateUsingPost(
  body: API.QuestionBankAddDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/questionBank/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
