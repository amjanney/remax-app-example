export default function useRender(render, pageSkeleton, [data, status, error]) {
  try {
    if (error) {
      return pageSkeleton(status, error);
    }

    if (status === 'loading') {
      return pageSkeleton(status, error);
    }

    if (data) {
      return render(data);
    }
  } catch (e) {
    return pageSkeleton(status, new Error('页面渲染错误' + e.message));
  }
  return null;
}
