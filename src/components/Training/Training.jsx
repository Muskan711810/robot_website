import React from 'react';
import './Training.css';
import png1 from '../../assets/png1.png'
import png2 from '../../assets/png2.png'
import png01 from'../../assets/png01.jpg'

const Training = () => {
  return (
    <div>
      <div className='bt'></div>
      <div>
      <h1 className='t1 t1-bg'>Training And Support</h1>
      <h2 className='t2'>We are Introducing 3 Programs</h2>
      <div className='t3'>
      <h4>1) Academics implementation </h4>
      <h4>2) Guest Lecture Services </h4>
      <h4>3) Lab with COD (Classes on Demand)</h4>
      </div>

      <div>
        <h2 className='t4'>GUEST LECTURER SERVICES </h2>
      </div>
      </div>

      <div>
        <p className='t7'> <span className='t6'>"At Robot-Ed Company,</span> we offer specialized Guest Lecturer 
        Services to enrich the STEM education experience in schools. Our Guest Lecturer Services entail STEM 
        Engineers visiting the campus for two days a week over a duration of nine months, totaling 63 sessions.</p>
        <p className='t7'>During these visits, our experienced STEM Engineers bring along specialized kits and resources to
        enhance hands-on learning for students. These kits are utilized during the interactive sessions to
        facilitate practical understanding and application of STEM concepts.</p> 
        <p className='t7'>One of the unique aspects of our Guest Lecturer Services is that the STEM Engineers
        will bring the necessary materials with them and take them back after each class, 
        ensuring convenience and minimal logistical burden on the school.</p>
        <p className='t7'>To ensure the effectiveness of the program, <span className='t8'> We require a minimum enrollment of 200 
        Students with the fee of 2000/- Rs per head </span> This threshold ensures that there is ample
        participation to facilitate dynamic and engaging learning experiences.</p>
        <p className='t7'>By availing of our Guest Lecturer Services, schools can benefit from the expertise of experienced 
        STEM professionals, enriched learning experiences, and enhanced practical understanding of STEM
        concepts. Contact us today to learn more about how our Guest Lecturer Services can benefit your
        school's STEM education initiatives."</p>
      </div>

      <div>
        <img src={png1} alt=""  className='png1'/>
        <img src={png2} alt=""  className='png1'/>
        <img src={png01} alt=""  className='png1'/>
      </div>

      <div>
        <p className='contact1'>therobotedcompany@gmail.com  <span className='contact2'>+917780484363,8919455711</span></p>
      </div>
    </div>
  );
}

export default Training;
