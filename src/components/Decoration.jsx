import React from 'react'

const Decoration = ({ severity, title }) => {
  return (
    <div className='decoration-container'>
      <div className='decoration'>
        <div className='rectangle tip-top'></div>
        <div className='rectangle tip-bottom'></div>
        <div className='rectangle tip-top'></div>
        <div className='rectangle tip-bottom'></div>
        <div className='rectangle tip-top'></div>
        <div className='rectangle tip-bottom'></div>
        <div className='rectangle tip-top'></div>
        <div className='rectangle tip-bottom'></div>
      </div>
      <div className='interpretation'>{severity.toUpperCase()} {title.toUpperCase()}</div>
    </div>
  )
}

export default Decoration