import React from 'react';
import InsertVideo from '../components/insertVideo/insertVideo';
import LoginHeader from '../components/loginHeader/loginHeader';
import InsertCard from '../components/insertCard/insertCard';

import LastFilm from '../components/insertVideo/recentFilm';



const InsertPage = () => {
  return (
    <div className='insertPage'>
     <LoginHeader />
     <LastFilm />   
     <InsertVideo />
     <InsertCard />
    </div>
  );
};

export default InsertPage;
