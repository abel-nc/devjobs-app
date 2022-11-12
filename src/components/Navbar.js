import React from 'react'
import search from '../assets/desktop/icon-search.svg'
import location from '../assets/desktop/icon-location.svg'
import filter from '../assets/mobile/icon-filter.svg'
import { useGlobalContext } from '../context'

const Navbar = () => {

    const { handleTimeChange, 
            handleLocationChange, 
            locationFilter, 
            titleFilter, 
            handleTitleChange, 
            applyFilters,
            openFiltersModal
    } = useGlobalContext()

    return (
        <nav>
            <div className='title-filter nav-section'>
                <img className='nav-icon' src={search} alt="search" />
                <input onChange={handleTitleChange} type="text" placeholder='Filter by title, companies, expertise...' value={titleFilter} />
            </div>
            <div className='location-filter nav-section'>
                <img className='nav-icon' src={location} alt="location" />
                <input onChange={handleLocationChange} type="text" placeholder='Filter by location...' value={locationFilter} />
            </div>
            <div className='nav-section'>
                <label className="checkbox-ct col-auto">
                    <input onChange={handleTimeChange} type="checkbox" />
                    Full Time
                </label>
                <img onClick={openFiltersModal} className='filter-icon' src={filter} alt="filter" />
                <button onClick={applyFilters} className='search-btn col'>
                    <span>Search</span>
                    <img src={search} alt="search" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar