import './App.css'
import axios from 'axios'
import ListCourse from './ListCourse'
import { useEffect, useState } from 'react'

function App() {
  const [courses,SetCourses] = useState([])
  const onDelete = (id) => {
   const deleteCourses = courses.filter((course) => {
    return course.id !== id;
   })
   SetCourses(deleteCourses) 
  }
  const getCourse = async() => {
    const response = await axios.get('http://localhost:3000/courses')
    SetCourses(response.data)
  }
  useEffect(() => {
    getCourse();
  },([]))

  return (
    <>
    <ListCourse course = {courses}  removecourse={onDelete}/>
    </>
  )
}

export default App
