import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import './App.css';
import { useEffect, useState } from 'react';
import { airtableAPI } from './DAL/airtable-api';

function App() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const data = await airtableAPI.loadCourses()
    setCourses(data.records)
  }

  useEffect(() => {
    loadCourses()
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Course Tracker</h1>
      <CourseForm courseAdded={loadCourses} />
      <CourseList courses={courses} refreshCourses={loadCourses} />
    </div>
  );
}

export default App;
