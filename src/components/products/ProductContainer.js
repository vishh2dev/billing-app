import React,{useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import Pagination from '../Pagination'
import AddProduct from './AddProduct'
import ProductTable from './ProductTable'
import SearchProducts from './SearchProducts'
import {sorting} from '../../helpers/sorting'
import './product.css'
const ProductContainer = (props) =>{
    const [searchTerm,setSearchTerm] = useState('')
    const [show,setShow] = useState(false)
    const [productResult,setproductResult] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)
    const [sortBy,setSortBy] = useState('')

    const startIndex = (page - 1) * 5

    const products = useSelector((state) =>{
        return state.products
    })

    useEffect(() =>{
        setTotalPages(Math.ceil(products.length / 5))
        setproductResult([...products])
    },[products])

    const handleSearch = (e) =>{
        const result = e.target.value
        setSearchTerm(result)
        searchFunction(result)

    }

    const searchFunction = (search) =>{
        const result = products.filter((ele) =>{
           return ele.name.toLowerCase().includes(search.toLowerCase())
        })
        
        setproductResult(result)
    }

    const handleSort = (e) =>{
        const value = e.target.value
        setSortBy(value)
        let sortedArray = []
        if(value === 'Name[A-Z]'){
            sortedArray = sorting(productResult,'name','Asc')
        } 
        else if(value === 'Name[Z-A]'){
            sortedArray = sorting(productResult,'name','Desc')

        }else if(value === 'priceHigh'){
            sortedArray = sorting(productResult,'price','numDesc')
        }else if(value === 'priceLow'){
            sortedArray = sorting(productResult,'price','numAsc')
        }
        else{
            sortedArray=[...products]
        }

        setproductResult(sortedArray)
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
                    <select value={sortBy} onChange={handleSort}>
                        <option value="">sort product</option>
                        <option value="Name[A-Z]">Name [A-Z]</option>
                        <option value="Name[Z-A]">Name [Z-A]</option>
                        <option value="priceHigh">price High</option>
                        <option value="priceLow">price Low</option>
                    </select>
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
            </Modal>
        </div>
    )
}

export default ProductContainer