import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FaCartPlus } from "react-icons/fa"
import { Button} from 'react-bootstrap'

const ProductTableForSales = (props) =>{
    const [searchTerm,setSearchTerm] = useState('')
    const[productResult,setProductResult] = useState([])

    const { getProduct }= props
    const products = useSelector((state) =>{
        return state.products
    })
    useEffect(()=>{
        setProductResult(products)
    },[products])

    const handleAdd = (id) =>{
        const arr = products.filter((product) =>{
            if(product._id === id){
                return product
            }
         })
        getProduct(arr.shift())
     }
     const handleSearch = (e) =>{
        const result = e.target.value
        setSearchTerm(result)
        searchFunction(result)

    }

    const searchFunction = (search) =>{
        const result = products.filter((ele) =>{
           return ele.name.toLowerCase().includes(search.toLowerCase())
           
        })
        
        setProductResult(result)
    }

    return(
        <div>
            <input type="text"
                placeholder="search here"
                value={searchTerm}
                onChange={handleSearch}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            productResult.slice(0,7).map((ele,i) =>{
                                return(
                                    <tr key={ele._id}>
                                        <td>{ele.name}</td>
                                        <td>{ele.price}</td>
                                        <td> <Button onClick={() =>{handleAdd(ele._id)}} ><FaCartPlus/>Add</Button></td> 
                                    </tr>
                                )
                            })
                        }
                        
                </tbody>
                
            </Table>
           
        </div>
    )
}

export default ProductTableForSales

