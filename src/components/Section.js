import React from 'react'
import { ImLocation } from 'react-icons/im';

const Section = (props) => {
    return (
        <section>
            <a href={props.googleMapsUrl}><img src={props.imageUrl} alt='japan' /></a>
            <div className='text-content'>
                <div className='head'>
                    <ImLocation className='location-icon' />
                    <p className='country'>{props.location}</p>
                    <a href={props.googleMapsUrl} className='view-maps'>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className='date'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </section>
    )
}

export default Section