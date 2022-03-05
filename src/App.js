import React from 'react';
import './index.css'
import Header from './compenents/Header';
import {useState} from 'react'
import feedbackData from './data/FeedbackData';
import FeedbackList from './compenents/FeedbackList';
import FeedbackStats from './compenents/FeedbackStats';

function App() {

  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {
    const data = feedback.filter((item) => {
      return item.id !== id
    });
    if(window.confirm("Are you sure you want to delete this review?")) setFeedback(data);
  }

  return <div className='container'>
      <Header text="FeedBack UI"/>
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} dfb={deleteFeedback}/>
  </div>;
}

export default App;