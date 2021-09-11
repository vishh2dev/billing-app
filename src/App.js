import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { withRouter } from 'react-router'

import './app.css'
import NavbarComponent from './components/Navbar.js'
import SideBar from './components/sidebar/SideBar'
// import { isLogin } from './actions/userAction'
import Topbar from './components/Topbar'
// import { startGetCustomer } from './actions/customerAction';
// import { startGetProduct } from './actions/productAction';
// import { startGetAllBill } from './actions/billAction';


const App = (props) =>{

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //     if(localStorage.getItem('token')){
  //       dispatch(isLogin(true))
  //       dispatch(startGetCustomer())
  //       dispatch(startGetProduct())
  //       dispatch(startGetAllBill())
  //     }
      
  //  },[])

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
