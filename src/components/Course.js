import React from 'react';
import { airtableAPI } from '../DAL/airtable-api';

const Course = ({ course, refreshCourses }) => {
    const markCoursePurchased = async (courseId) => {
        try {
            await airtableAPI.updateCourse(courseId)
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCourse = async (courseId) => {
        try {
            await airtableAPI.deleteCourse(courseId)
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group-item">
            <a href={course.fields.link}>
                <h4 className="list-group-item-heading">{course.fields.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.fields.tags && course.fields.tags.map((tag, index) => (
                    <span className="badge badge-primary mr-2" key={index}>{tag}</span>
                ))}
            </p>
            {!course.fields.purchased && (
                <button className="btn btn-sm btn-primary" onClick={() => markCoursePurchased(course.id)}>Purchased</button>
            )}
            <button className="btn btn-sm btn-danger ml-2" onClick={() => deleteCourse(course.id)}>Delete</button>
        </div>
    )
}
export default Course
