import axios from "axios";
import { Environment } from "../environment";

const baseUrl = Environment.baseAPIEndpoint;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config;
})

axios.interceptors.response.use((axiosResponse) => {
  return axiosResponse
})

const makeRequest = async (endpoint, options = {}) => {
  let url;
  if (endpoint.startsWith('http') || endpoint.startsWith('https')) {
    url = endpoint;
  } else {
    // url = `${baseUrl}/${endpoint}`;
    url = `${endpoint}`;
  }
  const res = await axiosInstance(url, options);
  return res.data;
}

export const RequestService = {
  post: (endpoint, data, headers = {}) => {
    return makeRequest(endpoint, {
      headers: {
        'Content-type': 'application/json',
        ...headers,
      },
      data: JSON.stringify(data),
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
        'Content-type': 'application/json',
        ...headers
      },
      data: JSON.stringify(data),
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