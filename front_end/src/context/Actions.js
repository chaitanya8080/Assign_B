

export const LoginStart =(userCredentials)=>({
    type:"LOGIN_START",
})

export const LoginSuccess =(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user
})

export const LoginError =(user)=>({
    type:"LOGIN_FAILURE",
    payload:user
})


export const Logout =()=>({
    type:"LOGOUT",
})



