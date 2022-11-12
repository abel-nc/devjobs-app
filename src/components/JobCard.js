import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {

    const { logo, logoBackground, position, company, postedAt, contract, location, id } = job
    const logoImg = require(`../assets/logos/${logo}`)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/jobs/${id}`)
        document.body.scrollIntoView({ block: 'start' })
    }

    return (
        <div onClick={handleClick} className='job-card'>
            <span className='company-logo'
                style={{ backgroundColor: logoBackground }} 
            >
                <img src={logoImg} alt={company} draggable="false" />
            </span>
            <h6>{postedAt}<span>•</span>{contract}</h6>
            <h5>{position}</h5>
            <h6>{company}</h6>
            <br />
            <h6 className='job-location'>{location}</h6>
        </div>
    )
}

export default JobCard