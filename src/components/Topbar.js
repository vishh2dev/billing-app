import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { startGetUserInfo } from '../actions/userAction'
import '../style.css'

const Topbar = (props) =>{
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(startGetUserInfo())
    },[])
    

    const user = useSelector((state) =>{
        return state.users
    })
    return(
        <div>
            <div className="topbar">
        
                <div className="topbarWrapper">

                    <div className="topLeft">

                        <span className="logo"> Bill mangement</span>  
                            
                    </div>

                    <div className="topRight">

                        <div className="topbarLinksInsideTop">
                        <span>Welcome {user.userDetails.username}</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topbar