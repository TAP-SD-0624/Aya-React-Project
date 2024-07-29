import React from 'react'
import Input from '../3.1.1.searchInput/Input'
import Filter from '../3.1.2. searchFilter/Filter'
import './search.css'

const Search = () => {
  return (
    <>
    <div className='search-bar'>
    <Input/>
    <div className='filters'>
    <Filter/>
    <Filter/>
    </div>
    </div>
    </>

  )
}

export default Search