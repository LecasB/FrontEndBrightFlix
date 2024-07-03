import React, { useState } from 'react';
import InsertVideo from '../components/insertVideo/insertVideo';
import LoginHeader from '../components/loginHeader/loginHeader';
import InsertCard from '../components/insertCard/insertCard';
import '../styles/css/insertVideo.css';
import LastFilm from '../components/insertVideo/recentFilm';

const InsertPage = () => {
  const [filterType, setFilterType] = useState('movies'); 

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <div className='insertPage'>
      <LoginHeader />
      <LastFilm filterType={filterType} />
      <InsertVideo filterType={filterType} onFilterChange={handleFilterChange} />
      <InsertCard />
      <head>
        <meta name="referrer" content="origin" />
      </head>
    </div>
  );
};

export default InsertPage;
