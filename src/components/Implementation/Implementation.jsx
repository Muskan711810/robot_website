import React from 'react'
import './Implementation.css'
import ri1 from '../../assets/ri1.jpg'
import ri2 from '../../assets/ri2.jpg'
import ri3 from '../../assets/ri3.jpg'

const Implementation = () => {
  return (
    <div>
        <div className='bt'></div>
      <div>
      <h1 className='t1 t1-bg'>Training And Support</h1>
      <h2 className='t4'>ACADEMICS IMPLEMENTATION </h2>
      </div>

      <div>
        <p className='t7'>"At <span className='t6'>The Robot-Ed Company,</span> we are delighted to offer an exceptional opportunity to schools interested in
             enhancing their STEM education capabilities. When you engage with our services for a period of three
             years, we provide a comprehensive <span className='t8'>STEM lab setup </span>entirely free of charge. This lab setup includes
             exclusive <span className='t8'>STEM kits</span> , high-quality furniture, and a meticulously designed theme-based classroom setup
            featuring attractive posters, all aimed at creating an immersive learning environment.</p>
         <p className='t7'>As part of this offer, the lab itself becomes a valuable gift to the school, representing
             our commitment to fostering innovation and excellence in education. To further facilitate 
             this partnership, we offer flexible fee structures tailored to suit your school's needs.
              For schools committing to a three-year Memorandum of Understanding (MOU), <span className='t8'>the annual fee
               per student is 3500. Alternatively, for a two-year commitment, the fee reduces to 3000 per 
               student per year.</span></p> 
        <p className='t7'>In addition to the lab setup and fee structures, our program comprises a 
            comprehensive <span className='t8'>set of 63 sessions </span> designed to engage students and educators alike in
             the wonders of STEM education. To ensure the effectiveness of our program, we require a
              minimum enrollment of 400 students</p> 
        <p className='t7'>In summary, by partnering with <span className='t6'>The Robot-Ed Company</span>, schools can enjoy the benefits of a 
            state-of-the-art <span className='t8'>STEM lab setup</span> , flexible fee options, engaging sessions, and our unwavering 
            commitment to delivering exceptional educational experiences. Contact us today to learn 
            more about how we can transform your school's approach to STEM education."</p> 
        <p className='t7'>For schools opting for a one-year engagement without committing to a three-year 
            Memorandum of Understanding (MOU), <span className='t8'> we offer our comprehensive STEM lab setup at a 
            rate of 3500 per student. This fee includes access to exclusive STEM kits, 
            a theme-based classroom setup with attractive posters.</span> Our team will ensure that the
            lab is installed to the highest standards, creating an immersive learning environment
            for students to explore and innovate As part of this arrangement, the company will set 
            up the lab facilities and ensure they are fully operational throughout the academic year.
            At the conclusion of the academic term, we will efficiently dismantle and remove the lab setup,
            minimizing any disruption to the school's operations While the engagement period may be shorter,
            our commitment to delivering exceptional educational experiences remains steadfast. <span className='t8'>Our program 
            consists of 63 engaging sessions designed to ignite curiosity and inspire creativity among
            students.</span></p>
            <p className='t7'>Whether your school opts for a one-year or multi-year engagement, Robot-Ed Company 
                is dedicated to empowering educators and students with the tools and resources they
                 need to excel in STEM education. Contact us today to explore how we can collaborate 
                 to elevate your school's educational journey."</p>
      </div>
      <div>
        <img src={ri1} alt="" className='png1'/>
        <img src={ri2} alt="" className='png1'/>
        <img src={ri3} alt="" className='png1'/>
        
      </div>
      <div>
        <p className='contact1'>therobotedcompany@gmail.com  <span className='contact2'>+917020028274,9822843908</span></p>
      </div>
    </div>
  )
}

export default Implementation
