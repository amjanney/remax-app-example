import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.less';
import { testGet, testPost } from '@/services/index';
import useAsync from '@/hooks/useAsync';

export default () => {
  React.useEffect(() => {
    /**
     * 传统的写法
     */
    // const param = 123;
    // testGet(param).then((res) => {
    //   console.log('get==>', res);
    // });
  }, []);

  /**
   * 使用useAsync的写法
   * 只关注返回的值，逻辑处理由useAsync处理，使得代码看起来更加的简单
   */
  const [data, status, error] = useAsync(testGet, param);

  return useRender(renderHTML, Selection.defaultRender, [data, status, error]);
};

/**
 * 可以把视图渲染的部分抽离出来，只负责渲染，不和逻辑混在一起，保持代码的纯洁
 */

function renderHTML(data) {
  return (
    <View className={styles.app}>
      <View className={styles.header}>header</View>
    </View>
  );
}
