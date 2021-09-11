import React from 'react'

const SearchProducts = (props) =>{
    const { searchTerm,handleSearch } = props

   
    return(
        <input  type="text"
                placeholder="search here"
                value={searchTerm}
                onChange={handleSearch}

        />
    )
}

export default SearchProducts