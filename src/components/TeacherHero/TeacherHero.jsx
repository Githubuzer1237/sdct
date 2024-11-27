import React from 'react'
import s from './TeacherHero.module.scss'
import TeacherCard from '../TeacherCard/TeacherCard'
const TeacherHero = () => {
  return (
   <>
           <section className={s.teacher}>
            <div className="container__main">
                <h1 className={s.teacher__title}>Учителя</h1>

                <div className={s.teacher__wrapper}>
                  <div className={s.teacher__cards}>

                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />



                   
                  </div>
                </div>
            </div>
           </section>
   </>
  )
}

export default TeacherHero
