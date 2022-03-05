import React from 'react'

function FeedbackStats({feedback}) {

    let avg = feedback.reduce((tot, item) => {
        return tot + item.rating;
    }, 0) / feedback.length;


  return (
    <div className='feedback-stats'>
        <h4>Total Reviews: {feedback.length}</h4>
        <h4>Average: {avg}</h4>
    </div>
  )
}

export default FeedbackStats