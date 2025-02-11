import { useState, useEffect } from 'react';
import './App.css';
import Criteria from './Criteria.jsx';
import Jobcard from './Jobcard.jsx';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "./firebase.config.js";
import Footer1 from './Footer.jsx';
import Midsection from './Midsection.jsx';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobRole, setJobRole] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });

    setJobs(tempJobs);
    setFilteredJobs(tempJobs);
  }

  const filterJobs = () => {
    const filtered = jobs.filter(job => {
      return (
        (jobRole ? job.title === jobRole : true) &&
        (location ? job.Location === location : true) &&
        (experience ? job.Experience === experience : true)
      );
    });
    setFilteredJobs(filtered);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCriteriaChange = (e) => {
    const { id, value } = e.target;
    if (id === 'jobRole') setJobRole(value);
    if (id === 'location') setLocation(value);
    if (id === 'experience') setExperience(value);
  }

  const handleSearch = () => {
    if (!jobRole || !location || !experience) {
      alert('Please fill in all fields.');
      return;
    }

    filterJobs();
  }

  const allFields = () => {
    fetchJobs();
    setJobRole('');
    setLocation('');
    setExperience('');
  }

  return (
    <>
      <div className='back p-4'>
        <div>
          <h1>Welcome to JobHunt...</h1>
          <p>Get latest job openings that best suits you!</p>
        </div>

        <Criteria 
          jobRole={jobRole}
          location={location}
          experience={experience}
          handleCriteriaChange={handleCriteriaChange}
          handleSearch={handleSearch}
          allFields={allFields}
        />

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Jobcard key={job.id} {...job} />
          ))
        ) : (
          <p className='no-jobs fw-bold'>No jobs found</p>
        )}
      </div>
      <Midsection />
      <Footer1 />
    </>
  );
}

export default App;
