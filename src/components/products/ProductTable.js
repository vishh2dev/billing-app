import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'

import EditProduct from './EditProduct'
import { startDeleteProduct } from '../../actions/productAction'


const ProductTable = (props) =>{
    const {productResult,startIndex} = props
    const[id,setId] = useState('')
    const[show,setShow] = useState(false)

    const dispatch = useDispatch()

    const handleShow = (productId) =>{
        setShow(true)
        if(productId){
            setId(productId)
        }
        
    }

    const handleClose = () => setShow(false)

    const handleRemove = (productId) =>{
        dispatch(startDeleteProduct(productId))
    }
   
    return(
        <div>
            <table className= "table table-bordered">
                <thead>
                    <tr>
                        <th >Name</th>
                        <th >Price</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            productResult.slice(startIndex,startIndex + 5).map((ele,i) =>{
                                return(
                                    <tr key={ele._id} >
                                        
                                        <td>{ele.name}</td>
                                        <td>{ele.price}</td>
                                        <td><Button onClick={() =>{handleShow(ele._id)}} variant="success" > edit </Button>
                                        <Button onClick={() =>{handleRemove(ele._id)}}  variant="danger"> delete </Button></td>
                                    </tr>
                                )
                            })
                        }
                        
                </tbody>
                
            </table>
             
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Product Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProduct handleClose={handleClose} id={id}/>  
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close Button
                    </Button>
                </Modal.Footer> */}
            </Modal>
        
        </div>
   )
}

export default ProductTable