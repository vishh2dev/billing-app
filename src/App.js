import React from 'react'
import { useSelector} from 'react-redux'

import { withRouter } from 'react-router'

import './app.css'
import NavbarComponent from './components/Navbar.js'
import SideBar from './components/sidebar/SideBar'
import Topbar from './components/Topbar'



const App = (props) =>{

  const isLogged = useSelector((state) =>{
    return state.users.isLogged
  })

  return(
    <>
      {
        isLogged ? (
                    <>
                      <Topbar/> 
                      <SideBar/>
                     
                    </>
                    )  
                  : <NavbarComponent/>
      }
       
    </>

  )
}

export default  withRouter(App) 
