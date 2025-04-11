import React from 'react'
import './talent.css'
import duck from '../../assets/duck.avif'

const Talent = () => {
  return (
    <div>
   <div className='talent  talent-buterfly '>
            <div className="col-lg-6 col-sm-12 col-12 mx-5 ">
                            <div>
                                <h1>Digital Core Capabilities</h1>
                                <p>Build vital capabilities to deliver digital outcomes.</p>
                                <button>Explore</button>
                                <div className='case-parent'>

                                    <div className='case1'>
                                        <p>case studies</p>
                                        <h3>Pfizer's journey towards increased productivity, powered by AI</h3>
                                        <p>view</p>

                                    </div>
                                    <div className='case2'>
                                        <h3>A government that contributes to the joy of parenting</h3>
                                        <p>view</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                {/* <div className="capability ">
                    <div className="row d-flex justify-content-start align-items-center">
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div>
                                <h1>Digital Core Capabilities</h1>
                                <p>Build vital capabilities to deliver digital outcomes.</p>
                                <button>Explore</button>
                                <div className='case-parent'>

                                    <div className='case1'>
                                        <p>case studies</p>
                                        <h3>Pfizer's journey towards increased productivity, powered by AI</h3>
                                        <p>view</p>

                                    </div>
                                    <div className='case2'>
                                        <h3>A government that contributes to the joy of parenting</h3>
                                        <p>view</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-sm-12 col-12 butterflyImg">
                            <img src={butterfly} alt="" className='img-fluid' />
                        </div> */}

                    {/* </div> */}
                {/* </div> */} 

            </div>

    </div>
  )
}

export default Talent