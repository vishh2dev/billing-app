import React from 'react'
import { useSelector} from 'react-redux'

import '../style.css'

const Topbar = (props) =>{
    
    const user = useSelector((state) =>{
        return state.users
    })
    return(
        <div>
            <div className="topbar">
        
                <div className="topbarWrapper">

                    <div className="topLeft">

                        <span className="logo"> Bill mangement</span>  
                            
                    </div>

                    <div className="topRight">

                        <div className="topbarLinksInsideTop">
                        <span>Welcome {user.userDetails.username}</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topbar