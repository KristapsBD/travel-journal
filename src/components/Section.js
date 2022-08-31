import React from 'react'
import { ImLocation } from 'react-icons/im';

const Section = () => {
    return (
        <section>
            <img src='https://source.unsplash.com/WLxQvbMyfas' alt='japan' />
            <div className='text-content'>
                <div className='head'>
                    <ImLocation className='location-icon' />
                    <p className='country'>JAPAN</p>
                    <p className='view-maps'>View on Google Maps</p>
                </div>
                <h1>Mount Fuji</h1>
                <p className='date'>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className='description'>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan,
                    for both Japanese and foreign tourists.
                </p>
            </div>
        </section>
    )
}

export default Section