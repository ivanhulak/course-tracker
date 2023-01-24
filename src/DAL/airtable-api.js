export const airtableAPI = {
   async loadCourses() {
      const response = await fetch('https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses', {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MY_API_TOKEN}`,
         }
      })
      const data = await response.json()
      return data
   },
   async createCourse(data) {
      const response = await fetch('https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses', {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MY_API_TOKEN}`,
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      const result = await response.json()
      return result
   },
   async updateCourse(courseId) {
      const response = await fetch(`https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses/${courseId}`, {
         method: 'PATCH',
         headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MY_API_TOKEN}`,
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({fields: { purchased: true }})
      })
      const result = await response.json()
      return result
   },
   async deleteCourse(courseId) {
      const response = await fetch(`https://api.airtable.com/v0/appVqBmZL2JZr6kYy/courses/${courseId}`, {
         method: 'DELETE',
         headers: {
            Authorization: `Bearer ${process.env.REACT_APP_MY_API_TOKEN}`,
         }
      })
      const result = await response.json()
      return result
   }
}