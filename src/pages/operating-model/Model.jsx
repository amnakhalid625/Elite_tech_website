import React from 'react';
import './model.css';

const Model = () => {
  return (
    <div className='model-container'>
      <div className='model-background'>
        <div className='model-content'>
          {/* Right side content */}
          <div className='model-text'>
            <h1>Digital Core Capabilities</h1>
            <p>Build vital capabilities to deliver digital outcomes.</p>
            <button className='section-buttons'>Explore</button>
            
            <div className='case-parent'>
              <div className='case1'>
                <p className="case-label">case studies</p>
                <h3>Pfizer's journey towards increased productivity, powered by AI</h3>
                <p className="view-link">view</p>
              </div>
              
              <div className='case2'>
                <h3>A government that contributes to the joy of parenting</h3>
                <p className="view-link">view</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model;