import React, { useContext, useState } from "react";
import data from './data.json'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {

    // SHOW ALL STATE
    const [showAll, setShowAll] = useState(false)
    // THEME STATE
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // FILTERS MODAL STATE
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    // JOBS STATE
    const [jobs, setJobs] = useState(data)
    // FILTER STATES
    const [fullTimeFilter, setFullTimeFilter] = useState(false)
    const [locationFilter, setLocationFilter] = useState('')
    const [titleFilter, setTitleFilter] = useState('')

    // LINKS INPUT VALUES WITH STATES
    const handleTimeChange = (e) => {
        const value = e.target.checked
        setFullTimeFilter(value)
    }
    const handleLocationChange = (e) => {
        const value = e.target.value
        setLocationFilter(value)
    }
    const handleTitleChange = (e) => {
        const value = e.target.value
        setTitleFilter(value)
    }

    // APPLY FILTERS
    const applyFilters = () => {
        let updatedJobs = data
        // CONDITIONALS
        if (fullTimeFilter) {
            updatedJobs = updatedJobs.filter(job => job.contract == 'Full Time')
        }
        if (locationFilter.length > 0) {
            updatedJobs = updatedJobs.filter(job => job.location.toLowerCase().includes(locationFilter.toLowerCase()))
        }
        if (titleFilter.length > 0) {
            updatedJobs = updatedJobs.filter(job => {
                const value = `${job.position.toLowerCase().trim()}${job.company.toLowerCase().trim()}`
                return value.includes(titleFilter.toLowerCase().trim())
            })
        }
        // MODIFY STATE
        setJobs(updatedJobs)
    }

    // TOGGLE FILTERS MODAL
    const openFiltersModal = () => {
        if (!isFiltersOpen) {
            setIsFiltersOpen(true)
        }
    }
    const closeFiltersModal = (e) => {
        if (!e.target.classList.contains('dcm') && isFiltersOpen) {
            setIsFiltersOpen(false)
        }
    }

    return (
        <AppContext.Provider value={{
            showAll,
            setShowAll,
            isDarkMode,
            setIsDarkMode,
            jobs,
            handleTimeChange,
            locationFilter,
            handleLocationChange,
            titleFilter,
            handleTitleChange,
            isFiltersOpen,
            applyFilters,
            openFiltersModal,
            closeFiltersModal
        }}>
            { children }
        </AppContext.Provider>
    )
}

// CUSTOM HOOK
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { useGlobalContext, AppProvider }