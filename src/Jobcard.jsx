import React from 'react';
import dayjs from 'dayjs';
import './Jobcard.css'
function Jobcard(props) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');

    const handleClick = () => {
        window.open(props.job_link, '_blank'); 
    };

    return (
        <div className="card mb-3 mt-3 shadow-sm job-card  ">
            <div className="card-body ">
                <h5 className="card-title">{props.title} - {props.company}</h5>
                <h6 className="card-subtitle mb-2  badge badge-success mr-2 text-white">{props.Experience} - {props.Location}</h6>
                <div className="mb-3">
                    {props.skills.map((skill, i) => (
                        <span key={i} className="badge badge-primary mr-2">{skill}</span>
                    ))}
                </div>
                <p className="card-text">Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
                <a href={props.job_link} target="_blank" rel="noopener noreferrer" className="btn btn-dark" onClick={handleClick}>
                    Apply
                </a>
            </div>
        </div>
    );
}

export default Jobcard;
