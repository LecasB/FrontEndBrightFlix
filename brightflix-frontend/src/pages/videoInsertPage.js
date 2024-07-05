import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InsertVideo from '../components/insertVideo/insertVideo';
import LoginHeader from '../components/loginHeader/loginHeader';
import InsertCard from '../components/insertCard/insertCard';
import '../styles/css/insertVideo.css';
import LastFilm from '../components/insertVideo/recentFilm';

const InsertPage = () => {
  const [filterType, setFilterType] = useState('movies');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <div className='insertPage'>
      <LoginHeader />
      <LastFilm filterType={filterType} />
      <InsertVideo filterType={filterType} onFilterChange={handleFilterChange} />
      <InsertCard />
    </div>
  );
};

export default InsertPage;
