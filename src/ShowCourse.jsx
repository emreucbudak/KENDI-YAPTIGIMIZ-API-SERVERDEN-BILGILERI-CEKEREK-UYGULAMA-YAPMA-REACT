import React from 'react'

function ShowCourse({ data,removeOneCourse }) {
    return (
        <div>
            <div className='card'>
                <div className='text'>
                    <p>{data.id}</p>
                    <p>{data.kurs}</p>
                    <p>{data.aciklama}</p>
                    <button onClick={() => {
                        removeOneCourse(data.id)
                    }}>Sil</button>
                </div>
        
            </div>
        </div>
    )
}

export default ShowCourse