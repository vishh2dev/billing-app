import React from 'react'

import Signin from './Signin'
import loginImg from '../../assests/login.png'

const Login = (props) =>{
    
        return(
            <div className="container mt-3"> 
                <div className="row">
                <div className="col-md-7">
                        <img className="img-fluid w-100" src={loginImg}></img>
                    </div>
                    <div className="col-md-5">
                       <Signin/>
                    </div>
                   
                </div>
            </div>
        )
    
}

export default Login