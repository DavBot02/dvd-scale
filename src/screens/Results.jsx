import React from 'react'
import Decoration from '../components/Decoration'

const Results = ({ severity, title, treatments }) => {
  return (
    <div className='results'>
      <div className='header'>
        <h1 className='title'>DVD Scale Interpretation</h1>
      </div>
      <Decoration severity={severity} title={title}></Decoration>
      <div className='treatment-container'>
        <div className='treatment'>Treatment</div>
      </div>
      <div className='treatment-description'>
        {treatments}
      </div>
    </div>
  )
}

export default Results