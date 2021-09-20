import React from 'react'
import { Link } from 'react-router-dom'

import upgradeImg from '../../assests/upgrade.png'
import dashImg from '../../assests/dashboard.png'
const Home = (props) =>{
    return(
        <>
            <div className="container mt-3"> 
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mt-3 text-left"> Welcome to Bill Mangement </h2>
                        <p className="text-left text-secondary">Upgrade your business with our billing app 
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid w-100" src={upgradeImg} alt="image"></img>
                    </div>
                </div>
        
                <h2 className="mt-3 text-center "><Link to='/features'>Our Features</Link></h2>
            </div>
           
    </>
    )
}

export default Home