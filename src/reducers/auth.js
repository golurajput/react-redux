const auth = {
    login:(state={
        isLoading: false,
        success: false,
        error: false,
        isAuth: false,
        sessionExpired: false
    }, action)=> {
        switch(action.type){
            case 'is_loading' : 
                return Object.assign({}, state,{
                    isLoading: true,
                    isAuth: false
                })
            case 'login_success' : 
                localStorage.setItem('authToken', 'Bearer '+action.payload.token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                return Object.assign({}, state,{
                    isLoading: false,
                    success: true,
                    isAuth: true
                });
            case 'login_fail' :
                return Object.assign({}, state,{
                    isLoading: false,
                    error: true,
                    isAuth: false
                })
            case 'logout' : 
                localStorage.clear();
                return Object.assign({}, state,{
                    sessionExpired: true
                })
            default : break;
        }
        return state;
    },
}
export default auth;