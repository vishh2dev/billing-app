const userInitialState = {
        isLogged : false,
        isRegistered :false,
        userDetails : {}
}

const userReducer = (state=userInitialState,action) =>{
    switch(action.type){
        case 'IS_REGISTER' :{
            return {...state, isRegistered:action.payload}
        }

        case 'IS_LOGIN' : {
            return {...state, isLogged:action.payload}
        }

        case 'IS_LOGOUT' :{
            return{...state,isLogged:action.payload}
        }

        case 'USER_INFO':{
            return{...state,userDetails:action.payload}
        }

        
        default:{
            return {...state}
        }
    }
}

export default userReducer