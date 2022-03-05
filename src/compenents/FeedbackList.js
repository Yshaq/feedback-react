import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, dfb}) {
    if (!feedback || feedback.length===0) {
        return (
            <div>No feedback yet :</div>
        )
    }

  return (
      <div className='feedback-list'>
      {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} dfb={dfb}/>
      ))}
      </div>
  )
}

export default FeedbackList