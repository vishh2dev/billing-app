import React from 'react'

import rocketImg from '../../assests/rocket.png'
import SignUp from './SignUp'

const Register = (props) =>{

    
    return(
        
            <div className="container mt-3"> 
                <div className="row">
                    <div className="col-md-7">
                        <img className="img-fluid w-100" src={rocketImg} alt="registerimage"></img>
                    </div>
                    <div className="col-md-5">
                        <SignUp/>
                    </div>
                </div>
            </div>
        
    )
}

export default Register