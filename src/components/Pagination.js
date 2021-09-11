import React from 'react'


const Pagination = (props) =>{
    const { totalPages,handlePageChange } =props
    const pages = [...Array(totalPages).keys()].map((num => num + 1))
    
    return(
        <div>
            {
                pages.map((num) =>{
                    return <button key={num}
                        onClick={() => {
                        handlePageChange(num)
                    }}> {num} </button>
                })
            }
        </div>
    )
}

export default Pagination