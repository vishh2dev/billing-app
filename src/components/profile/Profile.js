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
            <div className="profileInfoContainer">
                <span className="profileInfo"> Username : {user.userDetails.username}</span>
            </div>

            <div className="profileInfoContainer">
                <span className="profileInfo">Email :{user.userDetails.email} </span>
            </div>

            <div className="profileInfoContainer">
                <span className="profileInfo"> Business Name : {user.userDetails.businessName}</span>
            </div>

            <div className="profileInfoContainer">
                <span className="profileInfo">  Address : {user.userDetails.address}</span>
            </div>
        </div>
    )
}

export default Profile