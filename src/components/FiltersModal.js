import React from 'react'
import location from '../assets/desktop/icon-location.svg'
import search from '../assets/desktop/icon-search.svg'
import filter from '../assets/mobile/icon-filter.svg'
import { useGlobalContext } from '../context'

const FiltersModal = () => {

    const { handleLocationChange, locationFilter, handleTimeChange, applyFilters  } = useGlobalContext()

    return (
        <section className='filters-modal dcm'>
            <div className='modal-section d-flex align-items-center dcm'>
                <img className='modal-icon dcm' src={location} alt="location" />
                <input className='dcm' onChange={handleLocationChange} type="text" placeholder='Filter by location...' value={locationFilter} />
            </div>
            <div className='modal-section d-flex flex-column dcm'>
                <label className="checkbox-ct col-auto dcm">
                    <input className='dcm' onChange={handleTimeChange} type="checkbox" />
                    Full Time
                </label>
                <button onClick={applyFilters} className='search-btn col'>
                    <span>Search</span>
                </button>
            </div>
        </section>
    )
}

export default FiltersModal