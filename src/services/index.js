import { get, post } from './request';

const baseUrl =
  'https://www.fastmock.site/mock/ef52fedc00331cadb4c8de72a039ce15/test';

/**
 * 接口功能说明
 * @param {string} [字段名]
 * @return {Response} 返回结果
 * @http 接口类型
 */

export function testGet(param) {
  return get(`${baseUrl}/api/get`, {
    param,
    value: 123,
  });
}

export function testPost(param) {
  return post(`${baseUrl}/api/post`, {
    param,
    value: 123,
  });
}
