import React from 'react'

const ClinicalFeature = ({ id, title, image, points, isSelected, onClick }) => {

  return (
    <div className='card' onClick={onClick}>
      {title}
      <div className={`circle ${isSelected ? 'isActive' : ''}`}>
        <img className='image' src={image} />
      </div>
    </div>
  )
}

export default ClinicalFeature

