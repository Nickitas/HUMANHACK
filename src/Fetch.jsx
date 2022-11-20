const url = 'http://localhost:5000/'

const methodPOST = (type, body={}) => fetch(`${url}${type}`, {
    method: 'POST',
    headers: {
        'content-type':'application/json; charset=utf-8'
    },
    body: JSON.stringify({
        ...body,
    })
})
.then(e => e.json())

const methodGET = (type) => fetch(`${url}${type}`, {
    headers: {
        'content-type':'application/json; charset=utf-8'
    },
})
.then(e => e.json())

export const getUser = (token) => methodPOST('getUser', { token })
export const getRules = () => methodPOST('getRules')
export const getUsers = () => methodPOST('getUsers')

export const getAccuracy = () => methodGET('get_accuracy')
export const getServices = () => methodGET('get_services')
export const updateService = (id, status) => methodPOST('update_service', { id, status })
export const getDepartments = () => methodGET('get_departments')
export const getAccounts = () => methodGET('get_users')

export const getCameras = () => methodGET('get_cameras')





export const authUser = (login, password) => methodPOST('authUser', {
    login,
    password
})
export const checkAuth = () => methodPOST('checkAuth')