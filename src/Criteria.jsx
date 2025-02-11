import React from 'react';

function Criteria({ jobRole, location, experience, handleCriteriaChange, handleSearch, allFields }) {
    return (
        <div className="container back p-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="jobRole">Job Role</label>
                        <select 
                            className="form-control" 
                            id="jobRole" 
                            onChange={handleCriteriaChange} 
                            value={jobRole}
                        >
                            <option value="">Choose...</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Android Developer">Android Developer</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <select 
                            className="form-control" 
                            id="location" 
                            onChange={handleCriteriaChange} 
                            value={location}
                        >
                            <option value="">Choose...</option>
                            <option value="Remote">Remote</option>
                            <option value="In Office">In Office</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="experience">Experience</label>
                        <select 
                            className="form-control" 
                            id="experience" 
                            onChange={handleCriteriaChange} 
                            value={experience}
                        >
                            <option value="">Choose...</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Junior level">Junior level</option>
                            <option value="Mid Level">Mid level</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button 
                    className="btn btn-primary" 
                    onClick={handleSearch}
                >
                    Search
                </button>
                <button 
                    className="btn btn-primary mx-2" 
                    onClick={allFields}
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default Criteria;
