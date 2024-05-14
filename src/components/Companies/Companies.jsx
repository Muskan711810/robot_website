import React from 'react'
import './Companies.css'
import d1 from '../../assets/d1.png'
import d2 from '../../assets/d2.jpg'
import d3 from '../../assets/d3.png'
import v1 from '../../assets/v1.jpg'
import v2 from '../../assets/v2.jpg'
import v3 from '../../assets/v3.jpg'
import v4 from '../../assets/v4.jpg'
import v5 from '../../assets/v5.jpg'
import v6 from '../../assets/v6.jpg'
import v7 from '../../assets/v7.jpg'


const Companies = () => {
  return (
    <div>
      <h2 className='t1 t1-bg'>Our Group of Companies</h2>

      <div>
        <img src={d1}  alt="Destiny Tech Services"  className='png10'/>
        <img src={d2} alt=""  className='png10'/>
        <img src={d3} alt=""  className='png10'/>
      </div>
      <div>
        <span className='d11'>Destiny Tech Services </span>
          <span className='d12'>The ROBOT-Ed Company</span>
          <span className='d13'> Indian Business Excellence Awards</span>
      </div>
      <h2 className='t1 t1-bg'>The Robot-Ed Company Focusing Cities</h2>

      <div>
        <img src={v1} alt="" className='png1'/>
        <img src={v2} alt="" className='png1'/>
        <img src={v3} alt="" className='png1'/>
        <span className='city'>VISAKHAPATNAM</span>
        <span className='city1'>HYEDRABAD</span>
        <span className='city2'>TIRUPATI </span>
        <img src={v4} alt="" className='png1'/>
        <img src={v5} alt="" className='png1'/>
        <img src={v6} alt="" className='png1'/>
        <span className='city'>VIJAYAWADA</span>
        <span className='city11'>CHENNAI</span>
        <span className='city2'>BENGALURU </span>
        <img src={v7} alt="" className='png1'/>
      </div>
      <div>
      <span className='city12'>MUMBAI</span>
        {/* <p className='contact11'>therobotedcompany@gmail.com  <span className='contact21'>+917780484363,8919455711</span></p> */}
      </div>
    </div>
  )
}

export default Companies
