import React from 'react'
import {Link, Route,Switch,withRouter} from 'react-router-dom'

import Login from '../login/Login'
import Register from '../register/Register'
import Home from './Home'
import '../../style.css'


const NavbarComponent = () =>{
    return(
        <div>
            <div className="topbar">
            
                <div className="topbarWrapper">

                    <div >
                        <Link to="/" className="logo">Bill mangement</Link>     
                    </div>

                    <div className="topRight">

                        <div className="topbarLinks">
                            <Link to="/register" style={{textDecoration:'none', color: 'darkblue',fontSize:'20px'}}> Register with us </Link>
                        </div>
                        
                        <div className="topbarLinks">
                            <Link to="/login" style={{textDecoration:'none', color: 'darkblue',fontSize:'20px'}}> Login </Link>
                        </div>

                    </div>
                    
                </div>
               
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route  path="/register" component={Register} />
                    <Route  path="/login" component={Login} />
                </Switch>
            </div>
        </div>
    )
  }
  
  export default withRouter(NavbarComponent)