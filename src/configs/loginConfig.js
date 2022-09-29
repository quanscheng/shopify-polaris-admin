import axios from 'axios'

const { REACT_APP_LOGIN_ORGIN } = process.env

const instance = axios.create({
  baseURL: REACT_APP_LOGIN_ORGIN,
})

const handleResponse = (response) => {
  return response.data
}

const handleResponseErr = (error) => {
  // const errInfo = error.response.data

  // if (errInfo.code === 400 && errInfo.reason === 'LOGIN_REDIRECT') {
  //   const redirectUrl = errInfo.message
  //   window.location = redirectUrl
  // }

  return Promise.reject(error)
}

instance.interceptors.response.use(handleResponse, handleResponseErr)
