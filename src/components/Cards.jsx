import React from 'react'

const Cards = ({item}) => {

    const {name, species, image, location} = item;

  return (
    <div className='col-3 mb-4 mt-3'>
        <div className='card'>
            <img src={image} alt={image} className='card-img' />
            <div className='card-body'>
            <h5 className='card-title text-primary'>{name}</h5>
            <hr/>
            <p>
                <span className='fw-bold text-success'>Species: </span> {species}
            </p>
            <p>
                <span className='fw-bold text-success'>Location: </span> {location.name}
            </p>
            </div>
        </div>
    </div>
  )
}

export default Cards