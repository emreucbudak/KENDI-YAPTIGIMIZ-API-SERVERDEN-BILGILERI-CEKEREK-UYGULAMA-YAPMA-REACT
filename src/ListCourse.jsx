import React from 'react'
import ShowCourse from './ShowCourse'

function ListCourse({course,removecourse}) {
    return (
    <div>
        <div>
            <h2>Kurslar</h2>
        </div>
        <div className='kurslar'>
            {
                    course.map((data,index) => {
                        return <ShowCourse key={index} data = {data} removeOneCourse= {removecourse}/>
                    })
            }
        </div>
    </div>
  )
}

export default ListCourse