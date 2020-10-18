import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.less';
import { testGet, testPost } from '@/services/index';

export default () => {
  React.useEffect(() => {
    const param = 123;
    testGet(param).then((res) => {
      console.log('get==>', res);
    });

    testPost(param).then((res) => {
      console.log('get==>', res);
    });
  }, []);
  return (
    <View className={styles.app}>
      <View className={styles.header}>header</View>
    </View>
  );
};
