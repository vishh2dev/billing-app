import React from 'react'
import {Link, Route,Switch,withRouter} from 'react-router-dom'

import Login from './login/Login'
import Register from '../components/register/Register'
import '../style.css'


const NavbarComponent = () =>{
    return(
        <div>
            <div className="topbar">
            
                <div className="topbarWrapper">

                    <div className="topLeft">
                        <Link to="/" className="logo">Bill mangement</Link>     
                    </div>

                    <div className="topRight">

                        <div className="topbarLinks">
                            <Link to="/register" > Register with us </Link>
                        </div>
                        
                        <div className="topbarLinks">
                            <Link to="/login"> Login </Link>
                        </div>

                    </div>

                </div>

                <Switch>
                
                    <Route  path="/register" component={Register} />
                    <Route  path="/login" component={Login} />
                </Switch>
            </div>
        </div>
    )
  }
  
  export default withRouter(NavbarComponent)