import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get(`https://api.github.com/users/shakejelly/repos`)
    .then(response => {
      const xplore = {
        id: 'xplore',
        name: 'Xplore',
        description: 'Grupprojekt',
        stargazers_count: 5,
        forks_count: 0,
        language: 'C#, JS',
        html_url: 'https://johantran02.github.io/chas-challenge/'
      };
      setProjects([xplore, ...response.data ]);
      setLoading(false);
    })
    .catch(error => {
      setError('Kunde inte ladda in projekt. Försök igen senare.');
      setLoading(false);
      console.error('Error fetching repositories:', error);
    });
  }, []);

  if (loading) {
    return <div>Laddar in projekt...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

    return (
      <div className="portfolio-wrapper">
        
        {projects.map((repo) => (
          <div key={repo.id} className="project-card">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <p><strong>Stars:</strong> {repo.stargazers_count}</p>
            <p><strong>Forks:</strong> {repo.forks_count}</p>
            <p><strong>Language:</strong> {repo.language}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    );
  };

export default Portfolio;
