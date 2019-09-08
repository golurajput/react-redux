export default function (state=null, action){  
    
    switch(action.type){
        case 'userSelected' : return action.payload;  
        case 'successResult'  : return action.payload; 
        case 'failResult' : return action.payload;
        default: break;
    }
    return state;
}