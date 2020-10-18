function request(url, data = {}, options = {}) {
  options = Object.assign(
    {
      url,
      method: 'GET',
      dataType: 'json',
      data,
      autoCheckSuccess: true,
      loading: true,
    },
    options
  );

  options.methods = options.method.toUpperCase();
  if (options.method === 'GET') {
    options.url += '?';
    for (const key in data) {
      options.url += `${encodeURIComponent(key)}=${encodeURIComponent(
        data[key]
      )}&`;
    }
    delete options.data;
  } else {
    options.headers = Object.assign({}, options.headers, {
      'Content-Type': 'Application/json; charset=UTF-8',
    });
    options.data = JSON.stringify(options.data);
  }

  return new Promise((resolve, reject) => {
    if (window && window.fetch) {
      fetch(options.url, options)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          resolve({
            data: res,
          });
        })
        .catch((e) => {
          const error = new Error(e.errorMessage);
          error.errorCode = e.errorCode;
          reject(error);
        });
    } else {
      options.success = resolve;
      options.fail = function (e) {
        const error = new Error(e.errorMessage);
        error.errorCode = e.errorCode;
        reject(error);
      };
      dd.httpRequest(options);
    }
  });
}

function catchSuccessFail(ret) {
  const data = ret.data;
  if (!data.success) {
    const error = new Error(data.message || data.errorMsg);
    error.requestRet = ret;
    throw error;
  }
  return Promise.resolve(data);
}

export function get(url, data, options = {}) {
  options.method = 'GET';
  return request(url, data, options).then(catchSuccessFail);
}

export function post(url, data, options = {}) {
  options.method = 'POST';
  return request(url, data, options).then(catchSuccessFail);
}

export default request;
