import React from 'react';
import InsertVideo from '../components/insertVideo/insertVideo';
import LoginHeader from '../components/loginHeader/loginHeader';
import InsertCard from '../components/insertCard/insertCard';
import '../styles/css/insertVideo.css';



const InsertPage = () => {
  return (
    <div className='insertPage'>
     <LoginHeader />   
     <InsertVideo />
     <InsertCard />
    </div>
  );
};

export default InsertPage;
