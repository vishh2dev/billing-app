import React from 'react'
import {  useSelector } from 'react-redux'

import './profile.css'

const Profile = (props) =>{

    const user = useSelector((state) =>{
        return state.users
    })

   
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