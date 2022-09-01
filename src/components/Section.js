import React from 'react'
import { ImLocation } from 'react-icons/im';

const Section = (props) => {
    const { googleMapsUrl, imageUrl, location, startDate, endDate, description, title } = props;
    
    return (
        <section>
            <a href={googleMapsUrl}><img src={imageUrl} alt='japan' /></a>
            <div className='text-content'>
                <div className='head'>
                    <ImLocation className='location-icon' />
                    <p className='country'>{location}</p>
                    <a href={googleMapsUrl} className='view-maps'>View on Google Maps</a>
                </div>
                <h1>{title}</h1>
                <p className='date'>{startDate} - {endDate}</p>
                <p className='description'>{description}</p>
            </div>
        </section>
    )
}

export default Section
