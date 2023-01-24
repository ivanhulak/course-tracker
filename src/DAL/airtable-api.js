import axios from 'axios';

export const axiosConfig = {
   headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MY_API_TOKEN}`,
      'Content-Type': 'application/json'
   }
}

export const airtableAPI = {
   loadCourses() {
      return axios.get('https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses', axiosConfig)
   },
   createCourse(data) {
      return axios.post('https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses', data, axiosConfig)
   },
   updateCourse(courseId) {
      return axios.patch(`https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses/${courseId}`, 
         {fields: {purchased: true}}, axiosConfig)
   },
   deleteCourse(courseId){
      return axios.delete(`https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses/${courseId}`, axiosConfig)
   }
}