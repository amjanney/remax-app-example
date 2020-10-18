import * as React from 'react';
import { View } from 'remax/one';
import Empty from '../Empty';

function Skeleton(props) {
  const state = props.requestState || {
    loading: props.status === 'loading',
    isError: props.error ? true : false,
    errorMessage: props.error ? props.error.message : null,
  };

  if (state.isError) {
    return props.errorPage ? (
      props.errorPage
    ) : (
      <Empty title={state.errorMessage} />
    );
  }

  // 骨架屏
  if (state.loading) {
    return <View>这是骨架屏</View>;
  }

  return props.children;
}

Selection.defaultRender = function (status, error) {
  return <Skeleton status={status} error={error} />;
};
