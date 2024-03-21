import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>

           <div className='container w-50 mt-5'>
                <h1>My ToDo List...</h1>
                <Link to={'/todo'}>
                    <button className='btn btn-primary mt-5'>Get Started <i class="fa-solid fa-circle-chevron-right"></i></button>
                </Link>
           </div>

        </div>
    )
}

export default Home