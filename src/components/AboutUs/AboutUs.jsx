import React from 'react'
import './AboutUs.css'
import robo3 from '../../assets/robo3.png'

const AboutUs = () => {
  return (
    <div>
      <div className='para2'>
      <h1 className='services1'>THE ROBOT-ED COMPANY</h1>
      <h3 className='m1'>Mission Statement:</h3>
      <p className='border1'></p>
      <p className='para1'>"The Robot-Ed Company is committed to revolutionizing education through robotics. We aim to inspire and educate the next generation of innovators, problem-solvers, and leaders by providing cutting-edge robotics programs that foster creativity, critical thinking, and technical skills."
</p>
  <h3 className='m1'>Vision: </h3>
  <p className='border11'></p>
  <p className='para1'>The company's vision is to nurture Innovation and 21st-Century Skills in K-12 students 
  across the globe. We are on a journey which will help students toelevate core skills like Logical Thinking,
   Creativity, Computational Thinking and Problem Solving. </p>

   <h3 className='m1'>About Us:</h3>
   <p className='border111'></p>
   <p className='para1'>The Robot-Ed Company is a leading provider of comprehensive robotics education
    solutions for students of all ages. Our team of experienced educators <br/>and robotics enthusiasts is
     dedicated to empowering learners with hands-on experiences in robotics and technology.</p>

     <h3 className='m1'>Join us:</h3>
     <p className='border1111'></p>
     <p className='para1'>at The Robot-Ed Company and embark on a journey of exploration, discovery, and
      innovation in robotics education! </p>

      <div className='contact-container'>
  <div className='m111'>
    <h2 className='m11'>Contact us:</h2>
    <p><span className='con'>Email: </span>therobotedcompany@gmail.com </p>
    <p><span className='con'>Phone: </span>+91-7780484363 , 8919455711 </p>
    <p><span className='con'>CORPORATE OFFICE :</span>   2nd Floor, VSM Building,<br/> Destiny Tech Services,
      Renigunta Rd, beside<br/> NEXA Showroom, Tirupati, Andhra Pradesh 517501
    </p>
  </div>
  <img src={robo3} alt="" className="contact-image" />
</div>


      </div>
    </div>
  )
}
export default AboutUs
