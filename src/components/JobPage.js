import React from 'react'
import data from '../data.json'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

const JobPage = () => {

    const params = useParams()
    const job = data.find(item => item.id == params.id)
    const { logo, logoBackground, position, company, postedAt, contract, apply, location, id, description, requirements, role, website } = job
    const logoImg = require(`../assets/logos/${logo}`)
    const { isDarkMode, isFiltersOpen } = useGlobalContext()

    return (
        <main className={`${isDarkMode ? 'dark' : ''} ${isFiltersOpen ? 'overlay' : ''}`}>
            <section className='job-page'>
                {/* PAGE HEADER */}
                <header>
                    <span className='company-logo'
                        style={{ backgroundColor: logoBackground }} 
                    >
                        <img src={logoImg} alt={company} draggable="false" />
                    </span>
                    <section>   
                        <div>
                            <h5>{company}</h5>
                            <h6>{`${company.toLowerCase()}.com`}</h6>
                        </div>
                        <a href={website} target="_blank">
                            <button className='website-btn'>Website</button>
                        </a>
                    </section>  
                </header>
                {/* PAGE ARTICLE */}
                <article>
                    {/* ARTICLE HEADER */}
                    <header>
                        <div>
                            <h6>{postedAt}<span>•</span>{contract}</h6>
                            <h4>{position}</h4>
                            <h6 className='job-location'>{location}</h6>
                        </div>
                        <a href={apply} target="_blank">    
                            <button>Apply Now</button>
                        </a>
                    </header>
                    <br />
                    {/* DESCRIPTION */}
                    <p>
                        {description}
                    </p>
                    <br />
                    {/* REQUIREMENTS */}
                    <h5 className='mb-3'>Requirements</h5>
                    <p className='mb-3'>
                        {requirements.content}
                    </p>
                    {
                        requirements.items.map((item, index) => {
                            return (
                                <div className='d-flex align-items-start' key={index}>
                                    <span>•</span><p>{item}</p>
                                </div>
                            )
                        })
                    }
                    <br />
                    {/* ROLE */}
                    <h5 className='mb-3'>What Will You Do</h5>
                    <p className='mb-3'>
                        {role.content}
                    </p>
                    {
                        role.items.map((item, index) => {
                            return (
                                <div className='d-flex align-items-start' key={index}>
                                    <span>{index + 1}</span><p>{item}</p>
                                </div>
                            )
                        })
                    }
                </article>
            </section>
            <footer className='job-foot'>
                <div className='foot-content'>
                    <div>
                        <h5>{position}</h5>
                        <h6>{company}</h6>
                    </div>
                    <a href={apply} target="_blank">    
                        <button>Apply Now</button>
                    </a>
                </div>
            </footer>
        </main>
    )
}

export default JobPage