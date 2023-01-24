import React, { useState } from 'react';
import Tags from './Tags';
import {airtableAPI} from '../DAL/airtable-api';

export default function CourseForm({ courseAdded }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const [purchased, setPurchased] = useState(false);
    const [count, setCount] = useState(0);

    const resetForm = () => {
        setName('');
        setLink('');
        setPurchased(false)
        setCount(count + 1);
    };

    const data = {
        records: [
            {
                fields: {
                    name,
                    link,
                    tags,
                    purchased: false
                }
            }
        ]
    }
    const submitCourse = async (e) => {
        e.preventDefault();
        try {
            await airtableAPI.createCourse(data)
            resetForm();
            courseAdded();
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form className="" onSubmit={submitCourse}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            className="form-control"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="purchased">Purchased</label>
                        <input
                            type="checkbox"
                            name="purchased"
                            value={purchased}
                            style={{marginLeft: '10px'}}
                            onChange={(e) => setPurchased(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Tags</p>
                        <Tags tagsUpdated={setTags} keyValue={count} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
