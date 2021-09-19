import React from 'react'

import InfoContainer from './InfoContainer'
import Chart from './Chart'
import './dashboard.css'

const Dashboard = (props) =>{
   
    return(
        <div className="dash">
            <InfoContainer/>
            <Chart/>
        </div>
    )
}

export default Dashboard