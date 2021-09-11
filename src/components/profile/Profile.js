import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startGetUserInfo } from '../../actions/userAction'
import './profile.css'

const Profile = (props) =>{

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(startGetUserInfo())
    },[])
    

    const user = useSelector((state) =>{
        return state.users
    })

    // console.log('profile',user)
    return(
        <div className="profilecontainer">
            <span className="profileHeading">Account Details</span>
                <div className="profileInfo">
                    <span> Username : {user.userDetails.username}</span>
                </div>

                <div className="profileInfo">
                    <span>Email :{user.userDetails.email} </span>
                </div>

                <div className="profileInfo">
                    <span> Business Name : {user.userDetails.businessName}</span>
                </div>

                <div className="profileInfo">
                    <span>  Address : {user.userDetails.address}</span>
                </div>
        </div>
    )
}

export default Profile