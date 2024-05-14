import React from 'react'
import './Plode.css'
import robo2 from '../../assets/robo2.jpg'
import tb from '../../assets/tb.png'
import robo1 from '../../assets/robo1.png'

const Plode = () => {
  return (
    <div>
      <h1 className='plod'><span className='pl1'>Plode -</span> AI & Robotics Software Buddy</h1>
      <div className='bt3'></div>

      <div className='pl5'>
  <h3>Plode -<br/>Playful Coding</h3>
  <p>one platform. Infinite Creations.</p>
  <p className='pl6'>Plode Software Suite: A playfully<br/>created programming software<br/>platform that supports our entire<br/>series of STEM products.</p>
  <img src={robo1} alt="" className="pl-image" />
</div>


      <div>
      <h1 className='plod'><span className='pl1'>Tinker Bunker -</span> Digital Curriculum, Class 1-10</h1>
      <div className='bt31'></div>
      </div>

      <div className='bgv'>
      {/* <h2 className='bgv1'>tinker<br/>Bunker</h2> */}
      <img src={tb} alt="" className='tb'/>
      <p className='bgv2'>An online community-driven learning platform that provides students with
       access to interactive STEM lessons, mentoring, quizzes, and activities.</p>
       <img src={robo2} alt="" className='robo2'/>
       </div>

       <div>
        <p className='contact1'>therobotedcompany@gmail.com  <span className='contact2'>+917780484363,8919455711</span></p>
      </div>
    </div>
  );
}

export default Plode
