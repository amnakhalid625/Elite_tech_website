import React from 'react';
import './capability.css';

const Capability = () => {
    return (
        <section className='capability-section'>
            <div className='capability-container background-butterfly'>
                <div className="content-wrapper">
                    <div className="main-content">
                        <h1>Custom Software Development</h1>
                        <p>Build vital capabilities to deliver digital outcomes.</p>
                        <button className="explore-btn">Explore</button>
                        
                        <div className='case-studies'>
                            <div className='case-study case1'>
                                <p className="case-label">End-to-End Development</p>
                                <h3>
                                From concept to deployment, we handle the entire software development lifecycle.</h3>
                            </div>
                            
                            <div className='case-study case2'>
                            <p className="case-label">Scalable and Flexible Solutions</p>

                                <h3>
                                Our solutions grow with your business, offering flexibility to adapt to changing market conditions.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Capability;