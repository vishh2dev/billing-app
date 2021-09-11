import React from 'react'

const SearchCustomer = (props) =>{
    const { searchTerm,handleSearch } = props


    return(
        <div>
            <input  type="text"
                placeholder="search here"
                value={searchTerm}
                onChange={handleSearch}

            />
        </div>
    )
}

export default SearchCustomer