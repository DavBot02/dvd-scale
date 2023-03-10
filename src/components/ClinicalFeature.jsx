import React from 'react'

const ClinicalFeature = ({ id, title, image, points, isSelected, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
      {title}
      <div className={`circle ${isSelected ? 'isActive' : ''}`}>
        <img className='image' src="https://cdn-icons-png.flaticon.com/512/2047/2047553.png" />
      </div>
    </div>
  )
}

export default ClinicalFeature

