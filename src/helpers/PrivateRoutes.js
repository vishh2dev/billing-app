import { Route,Redirect } from "react-router-dom";

const PrivateRoutes = ({component : Component, ...rest}) =>{
    return(
        <Route 
            {...rest}
            render={props =>{
                return localStorage.getItem('token') ? (
                    <Component {...props} />
                ):(
                    <Redirect to={{pathname: '/login'}} />
                )
            }}
        />
    )
}

export default PrivateRoutes