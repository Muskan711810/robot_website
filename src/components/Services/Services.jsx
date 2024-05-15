import React from 'react';
import './Services.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';




const Services = () => {
  return (
    <div className="service-container">
      <h1 className='services'>Services:</h1>
      <div className="service">
        <h4 className='r1'>Robotics Curriculum Development:</h4>
        <p className="service-text">We design customized robotics curricula tailored to meet the specific needs and goals of schools, after-school programs, and educational institutions.</p>
        <img src={img1} alt="" className="img1" />
      </div>
      
      <div className="service">
        <h4 className='r1'>Robotics Workshops<br/> and Camps: </h4>
        <p className="service-text">Our engaging workshops and camps offer students the opportunity to explore robotics concepts, programming, and engineering through fun and interactive activities.</p>
        <img src={img2} alt="" className="img1" />
      </div>
      
      <div className="service">
        <h4 className='r1'>Teacher Training <br/>and Professional Development: </h4>
        <p className="service-text">We provide training sessions and resources to educators, equipping them with the knowledge and skills to effectively integrate robotics into their classrooms and engage students in STEM learning</p>
        <img src={img3} alt="" className="imgg1" />
      </div>

      <div className="service">
        <h4 className='r1'>Robotics Kits and Resources : </h4>
        <p className="service-text">We offer a range of robotics kits, components, and educational materials, enabling schools and educators to implement robotics programs with ease.
</p>
        <img src={img4} alt="" className="imggg1" />
      </div>

      <div className="service">
        <h4 className='r1'>Competition Support: </h4>
        <p className="service-text">We support students participating in robotics competitions by providing coaching, resources, and technical assistance to help them succeed and excel in their endeavors.</p>
        <img src={img5} alt="" className="imgggg1" />
      </div>

      <div>
        <h1 className='r2'>WHY CHOOSE US:</h1>
        <div className="expertise-container">
  <h4 className='r3'>Expertise:</h4>
  <p>Our team comprises seasoned educators and robotics specialists with a wealth of experience in both education and technology.</p></div>

      <div className="expertise-container">  <h4 className='r3'>Customization:</h4> 
         <p>We understand that every educational institution has unique needs, 
         and we tailor our programs and services accordingly.</p>
         </div> 
         <div className="expertise-container">
         <h4  className='r3'>Engagement: </h4><p> We believe in making learning enjoyable and engaging, 
         fostering a passion 
         for robotics and STEM subjects. </p>
         </div>
         <div className="expertise-container">
         <h4  className='r3'>Support:</h4>
         <p>We provide comprehensive support to our clients, ensuring they have the
           guidance and resources needed to achieve their educational goals. </p>
          </div>
          <div className="expertise-container">
          <h4  className='r3'>Innovation:</h4>
          <p> stay at the forefront of technological advancements in robotics education, 
           continually updating our programs and resources to reflect the latest trends and developments.</p>
           </div>
      </div>

      <div>
        <p className='contact1'>therobotedcompany@gmail.com  <span>+917780484363,8919455711</span></p>
      </div>
    </div>
  );
}

export default Services;
