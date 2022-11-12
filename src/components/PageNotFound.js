import React from 'react'
import { Link } from 'react-router-dom'
import img404 from '../assets/404.png'

const PageNotFound = () => {
    return (
        <section className='page-not-found'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button>Go Back</button>
            </Link>
            <img src={img404} alt="page not found" draggable="false" />
        </section>
    )
}

export default PageNotFound