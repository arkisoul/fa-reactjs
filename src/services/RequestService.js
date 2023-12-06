const baseUrl = `http://localhost:4000`;

const makeRequest = async (endpoint, options = {}) => {
  let url;
  if (endpoint.startsWith('http') || endpoint.startsWith('https')) {
    url = endpoint;
  } else {
    url = `${baseUrl}/${endpoint}`;
  }
  const res = await fetch(url, options)
  return res.json();
}

export const RequestService = {
  post: (endpoint, data, headers = {}) => {
    return makeRequest(endpoint, {
      headers: {
        ...headers
      },
      body: JSON.stringify(data),
      method: 'POST',
    })
  },
  get: (endpoint, headers = {}) => {
    return makeRequest(endpoint, {
      headers: {
        ...headers
      },
      method: 'GET',
    })
  },
  put: (endpoint, data, headers = {}) => {
    return makeRequest(endpoint, {
      headers: {
        ...headers
      },
      body: JSON.stringify(data),
      method: 'PUT',
    })
  },
  delete: (endpoint, headers = {}) => {
    return makeRequest(endpoint, {
      headers: {
        ...headers
      },
      method: 'DELETE',
    })
  }
}