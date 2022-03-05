import React from 'react';
import {useState} from 'react';
import Card from '../shared/Card';
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, dfb}) {
    const [rating, setRating] = useState(item.rating)
    const [text, setText] = useState(item.text)

    const incRating = () => {
        setRating((prev) => {
            return prev+1;
        });
    }

  return <Card>
  <div className="num-display">{rating}</div>
  <button className='close' onClick={() => dfb(item.id)}>
    <FaTimes color='purple'/>
  </button>
  <div className="text-display">{text}</div>
  </Card>;
}

export default FeedbackItem;
