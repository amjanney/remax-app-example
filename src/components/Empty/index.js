import * as React from 'react';
import { View } from 'remax/one';

export default function Empty({ title = '暂无数据' }) {
  return <View>{title}</View>;
}

Empty.defaultProps = {
  title: '暂无数据',
};
