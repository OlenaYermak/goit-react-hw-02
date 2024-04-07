import { useEffect, useState } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'



export default function App() {
  const getInitialFeedback = () => {
    const savedFeedbackClick = localStorage.getItem("feedbackClick");
    return savedFeedbackClick ? JSON.parse(savedFeedbackClick) : { good: 0, neutral: 0, bad: 0 };
  }

  const [feedback, setFeedback] = useState(getInitialFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevfeedback) => {
      return {
        ...prevfeedback,
        [feedbackType]: feedback[feedbackType] + 1
      };
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
 
 const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

 


  useEffect(()=>{
    localStorage.setItem("feedbackClick", JSON.stringify(feedback))
  } ,[feedback]);

  return (
    <>
     
      <Description />
      <Options  onUpdate={updateFeedback}  totalFeedback={totalFeedback} onReset={resetFeedback} />
      {totalFeedback > 0 ? (<>
      <Feedback count={feedback}
      totalFeedback={totalFeedback}
      positiveFeedback={positiveFeedback}/>
        </>) : (<Notification /> )}
       
       
      
    </>
  )
}

