import React from 'react'
import JobCard from './JobCard'
import data from '../data.json'
import { useGlobalContext } from '../context'

const JobsContainer = () => {

    const { showAll, setShowAll, jobs } = useGlobalContext()

    return (
        <>
            <section className='jobs-ct'>
                {
                    jobs.map((job, index) => { 
                        if (showAll && data.length > 9) {
                            return <JobCard key={job.id}  job={job} />
                        } else {
                            if (index < 9) {
                                return <JobCard key={job.id}  job={job} />
                            }
                        }
                    }) 
                }
            </section>
            <div className='load-btn'>
                { jobs.length > 9 
                    ? <button onClick={() => setShowAll(!showAll)}>
                        { showAll ? 'Show Less' : 'Show All' }
                    </button>
                    : null
                }
            </div>
        </>
    )
}

export default JobsContainer