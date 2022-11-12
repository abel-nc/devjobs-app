import React from 'react'
import { useGlobalContext } from '../context'
import FiltersModal from './FiltersModal'
import JobsContainer from './JobsContainer'
import Navbar from './Navbar'
import NotFound from './NotFound'

const Home = () => {

    const { isDarkMode, isFiltersOpen, jobs } = useGlobalContext()

    return (
        <main className={`${isDarkMode ? 'dark' : ''} ${isFiltersOpen ? 'overlay' : ''}`}>  
            <Navbar />
            { jobs.length > 0 
                ? <JobsContainer />
                : <NotFound />
            }
            { isFiltersOpen ? <FiltersModal /> : null }
        </main>
    )
}

export default Home