
import {Login} from './auth';

const allAction = ({
    Login: Login,
})
export default allAction;



// export const selectUser = (user) =>{
//     return{
//         type: 'userSelected',
//         payload: user
//     }
// }

// export function selectUser(){
//     return (dispatch)=>{
//         return fetch('https://staging.core.pokital.com/api/v1/login', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 coordinate: {lat: 22.6815391, long: 75.86449979999999},
//                 email: "superadmin@pokital.com",
//                 password: "12345678",
//                 timezone: "Asia/Calcutta",
//                 type: "admin"
//             })
//         }).then((res)=>res.json())
//         .then((response)=>{
//             debugger
//             if(response.status==='success'){
//                 dispatch(successResponse(response.details));
//             }else{
//                 dispatch(failResponse(response.error))
//             }
//         })
//         .catch((error)=>{
//             debugger
//         })
//     }
// }

// function successResponse(res){
//     return{
//         type: 'successResult',
//         payload: res
//     }
// }

// function failResponse(res){
//     return{
//         type: 'failResult',
//         payload: res
//     }
// }