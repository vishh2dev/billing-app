import React from 'react'
import { Link, Route, Switch,withRouter} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Bills from '../bills/Bills'
import Customers from '../customers/Customers'
import Dashboard from '../dashboard/Dashboard'
import Products from '../products/Products'
import Profile from '../profile/Profile'
import Sales from '../sales/Sales'
import {isLogout}  from '../../actions/userAction'
import Invoice from '../sales/Invoice'
import PrivateRoutes from '../../helpers/PrivateRoutes'

import './sidebar.css'

const SideBar = (props) =>{

    const dispatch = useDispatch()

    return(
       
        <div className="displaycontainer">
      
          
            <div className="sidebar">

                
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <li className="sidebarList "><Link to="/dashboard" className="a"> Dashboard </Link></li>
                        </div>
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <li className="sidebarList"><Link to="/customers"  className="a"> customers </Link></li>
                        </div>
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <li className="sidebarList"><Link to="/products" className="a"> products </Link></li>
                        </div>
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <li className="sidebarList"><Link to="/sales" className="a"> sales </Link></li>
                        </div>
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <li className="sidebarList"><Link to="/bills" className="a"> Bills </Link></li>
                        </div>
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <li className="sidebarList"><Link to="/profile" className="a"> profile </Link></li>
                        </div>
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <li className="sidebarList"> 
                            <Link to="#" onClick = {() =>{
                        localStorage.removeItem('token')
                        dispatch(isLogout(false))
                        alert('successfully logout')
                        props.history.push('/login')
                    }} className="a">logout</Link>
                            </li>
                        </div>
                    </div>
                    
                    

                
            </div>
           

        
                
                    <Switch>
                    {/* <Route  path="/" component={Dashboard} exact={true}/> */}
                            <PrivateRoutes  path="/dashboard" component={Dashboard} exact />
                            <PrivateRoutes  path="/customers" component={Customers} />
                            <PrivateRoutes  path="/products" component={Products} />
                            <Route  path="/sales" component={Sales} />
                            <Route  path="/bills" component={Bills} />
                            <Route  path="/profile" component={Profile} />
                            <Route  path="/invoice/:id" component={Invoice}  />
                    </Switch> 
            

        </div>

      
    )
}

export default withRouter(SideBar)