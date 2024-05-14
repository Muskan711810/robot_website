import React from 'react'
import './Labs.css'
import lab7 from "../../assets/lab7.jpg"
import lab2 from "../../assets/lab2.jpg"
import lab33 from "../../assets/lab33.jpg"
import lab4 from "../../assets/lab4.jpg"

const Labs = () => {
  return (
    <div>
      <div className='bt'></div>
      <div>
      <h1 className='t1 t1-bg'>Training And Support</h1>
      <h2 className='t4'>LAB WITH CLASSES ON DEMAND </h2>
      </div>

      <div>
        <p className='t7'> <span className='t6'>"At Robot-Ed Company</span>, we understand that not all schools have the resources to invest 
            in elaborate STEM education setups. That's why we offer a tailored solution called
             'Lab with Classes on Demand,' specifically designed for small schools that may have 
             budget constraints but still aspire to provide quality STEM education to their students.</p>
        <p className='t7'>With our Lab with Classes on Demand service, we work closely with small schools to design
             a customized lab setup that fits within their budgetary constraints. Our team provides expert
              guidance and assistance throughout the setup process, ensuring that the school gets the most 
              value for their investment.</p>
        <p className='t7'>The cost of the lab setup can vary based on the school's specific requirements,<span className='t8'> but 
            it starts from 1.8 lakhs, making it accessible to small schools with limited financial resources.</span></p>
        <p className='t7'> In addition to setting up the lab, we also offer classes on demand, where schools can schedule 
            sessions based on their needs. For each session, we dispatch one of our skilled STEM engineers
             to the school to conduct engaging and interactive classes. </p>
        <p className='t7'>To avail of our classes on demand service,<span className='t8'> schools are charged a nominal fee of 6000/- 
            per session.</span> This fee covers the cost of sending our STEM engineer to the school and facilitating 
            the educational session</p>
        <p className='t7'>By partnering with Robot-Ed Company and utilizing our Lab with Classes on Demand
         service, small schools can overcome financial barriers and provide their students with enriching STEM 
         education experiences. Contact us today to learn more about how we can support your school's STEM 
         education initiatives within your budgetary constraints."</p>
      </div>

      <div>
        <img src={lab7} alt="" className='png1'/>
        <img src={lab2} alt="" className='png1'/>
        <img src={lab33} alt="" className='png1'/>
        <img src={lab4} alt="" className='png1'/>
      </div>

      <div>
        <p className='contact1'>therobotedcompany@gmail.com  <span className='contact2'>+917780484363,8919455711</span></p>
      </div>
    </div>
  )
}

export default Labs
