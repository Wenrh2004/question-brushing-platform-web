// @ts-ignore
/* eslint-disable */
import request from '@/libs/request';

/** 根据id查询题目 GET /question/getById/${param0} */
export async function getByIdUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`/question/getById/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据条件查询题目 POST /question/search/page/vo */
export async function searchQuestionVoByPageUsingPost(
  body: API.QuestionQuery,
  options?: { [key: string]: any },
) {
  return request<API.PageDTOQuestionVO_>('/question/search/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
