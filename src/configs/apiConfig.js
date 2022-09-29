import axios from 'axios'
// import Cookies from 'js-cookie'

const { REACT_APP_API_ORIGIN } = process.env

const ax = axios.create({
  baseURL: REACT_APP_API_ORIGIN,
})

// request
const handleRequest = (config) => {
  if (config.method === 'post') {
    if (config?.data?.isFormData) {
      config.headers.post['Content-Type'] = 'multipart/form-data'
      config.data = config.data.formData
    }
  }

  // config.headers.Authorization = Cookies.get('Authorization')

  return config
}
// request error
const handleRequestErr = (error) => {
  return Promise.reject(error)
}

// response
const handleResponse = (response) => {
  return response
}
// response error
const handleResponseErr = (error) => {
  // const errInfo = error.response.data

  // if (
  //   (errInfo.code === 401 && errInfo.reason === 'UNAUTHENTICATED') ||
  //   (errInfo.code === 500 && errInfo.reason === 'VERIFICATION_FAILURE')
  // ) {
  //   const origin = window.location.origin
  //   Cookies.remove('Authorization')
  //   window.location = `${origin}/login`
  // }

  return Promise.reject(error)
}

// use
ax.interceptors.request.use(handleRequest, handleRequestErr)
ax.interceptors.response.use(handleResponse, handleResponseErr)

export { ax }
