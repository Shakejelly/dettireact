import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cvData from '...data/cvdata.json'

const Cv = () => {
    const [cvInfo, setCvInfo] = useState({ education: [], work: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {

      axios.get(cvData) 
        .then(response => {
          setCvInfo(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError('Kunde inte ladda in projekt. Försök igen senare.');
          setLoading(false);
          console.error('Error fetching data:', error);
        });
    }, []);
  
    if (loading) {
      return <div>Laddar CV...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
        <div className='cv-wrapper'>
          <div className='section'>
            <h2>Utbildning</h2>
            {cvInfo.education && cvInfo.education.length > 0 ? (
              cvInfo.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.schoolName}</h3>
                  <p>{edu.timeLapse}</p>
                  <p>{edu.text}</p>
                </div>
              ))
            ) : (
              <p>Ingen utbildning tillgänglig</p>
            )}
          </div>
    
          <div className='section'>
            <h2>Arbetslivserfarenhet</h2>
            {cvInfo.work && cvInfo.work.length > 0 ? (
              cvInfo.work.map((work, index) => (
                <div key={index} className="work-item">
                  <h3>{work.companyName}</h3>
                  <p>{work.timeLapse}</p>
                  <p>{work.role}</p>
                  <p>{work.text}</p>
                </div>
              ))
            ) : (
              <p>Ingen arbetslivserfarenhet tillgänglig</p>
            )}
          </div>
        </div>
      );
    };
    
    export default Cv;