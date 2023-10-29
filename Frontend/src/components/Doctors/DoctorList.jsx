import React from 'react'
import {doctors} from './../../assets/data/doctors.js'
import DoctorCard from './DoctorCard.jsx'


const DoctorList = () =>{


    return (
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ' >
         {
            doctors.map((doctor, index) => <DoctorCard key={index} doctor={doctor}   />)
         }
      </div>
    )
}


export default DoctorList