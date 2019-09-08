export function login(email, password){
    return (dispatch)=>{
        dispatch(loginLoader(true))
        return fetch('https://staging.core.pokital.com/api/v1/login',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                coordinate: {lat: 22.6815391, long: 75.86449979999999},
                timezone: "Asia/Calcutta",
                type: 'admin',
                email: email,
                password: password
            })
        }).then((res)=>res.json())
        .then((responseJSON)=>{
            if(responseJSON.status==='success'){
                return dispatch(loginSuccess(responseJSON.details));
            }else{
                return dispatch(loginFail(responseJSON.error));
            }
        })
        .catch((error)=>{
            return dispatch(loginLoader(false))
            console.log(error);
        })
    }
}

// export function logOut(logout){
//     return{
//         type: 'logout',
//         payload: logout
//     }
// }

function loginSuccess(res){
    return{
        type: 'login_success',
        payload: res
    }
}

function loginFail(res){
    return{
        type: 'login_fail',
        payload: res
    }
}

function loginLoader(isLoading){
    return{
        type: 'is_loading',
        payload: isLoading
    }
}