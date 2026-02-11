import React from 'react'

function Education() {
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col-5 mt-5 ">
          <img style={{width:"95%"}} src="media/images/index-education.svg" alt="index" />
        </div>
        <div className="col-1"></div>

        <div className="col-6 mt-5 p-4">
          <h5>Free and open market education</h5>
          <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a  href="#">Varsity <i className="fa-solid fa-arrow-right"></i></a>

          <p className='mt-5 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="#">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      
    </div>
  )
}

export default Education
