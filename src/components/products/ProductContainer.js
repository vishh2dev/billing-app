import React,{useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Pagination from '../Pagination'
import AddProduct from './AddProduct'
import ProductTable from './ProductTable'
import SearchProducts from './SearchProducts'
import './product.css'
const ProductContainer = (props) =>{
    const [searchTerm,setSearchTerm] = useState('')
    const[show,setShow] = useState(false)
    const [productResult,setproductResult] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)
    
    const startIndex = (page - 1) * 5

    const products = useSelector((state) =>{
        return state.products
    })

    useEffect(() =>{
        setTotalPages(Math.ceil(products.length / 5))
        setproductResult(products)
    },[products])

    const handleSearch = (e) =>{
        const result = e.target.value
        setSearchTerm(result)
        searchFunction(result)

    }

    const searchFunction = (search) =>{
        const result = products.filter((ele) =>{
           if(ele.name.includes(search)){
            return ele
           }
        })
        // console.log('container',result)
        setproductResult(result)
    }

    const handleShow = () => setShow(true)
    
    const handleClose = () => setShow(false)

    const handlePageChange = (num) =>{
        setPage(num)
    }
    
    
    return(
        <div className="productcontainer">
            <div className="row">
                <div className="col-md-5">
                    <SearchProducts searchTerm={searchTerm} handleSearch={ handleSearch}/>
                </div>
                <div className="col-md-5">
                    <SearchProducts searchTerm={searchTerm} handleSearch={ handleSearch}/>
                </div>
                <div className="col-md-2">
                    <Button onClick={handleShow} variant="primary"> + Add product</Button>
                </div>
            
            </div>
            <h2 className="my-4 font-weight-bold-display-4">Listing Products</h2>
            <ProductTable productResult={productResult} startIndex={startIndex} />
            <Pagination totalPages={totalPages} handlePageChange={handlePageChange}/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Product Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProduct handleClose={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductContainer