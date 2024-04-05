import { useEffect, useState } from 'react'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'



export default function App() {

  const [feedback, setFeedback] = useState({
     good: 0,
	neutral: 0,
	bad: 0
   });

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
    localStorage.setItem("feedback", JSON.stringify(feedback))
  } ,[feedback]);

  return (
    <>
     
      <Description />
      <Options nameBtn="Good" feedbackType="good" onUpdate={updateFeedback} />
      <Options nameBtn="Neutral" feedbackType="neutral" onUpdate={updateFeedback}/>
      <Options nameBtn="Bad"  feedbackType="bad" onUpdate={updateFeedback} />
      <Options nameBtn="Reset" totalFeedback={totalFeedback} onReset={resetFeedback} />
      {totalFeedback > 0 ? (<>
      <Feedback feedbackType="Good" count={feedback.good}/>
      <Feedback feedbackType="Neutral" count={feedback.neutral}/>
        <Feedback feedbackType="Bad" count={feedback.bad} />
        <Feedback feedbackType="Total" count={totalFeedback} />
        <Feedback feedbackType="Positive" count={`${positiveFeedback}%`}/>
        </>) : (<Notification /> )}
       
       
      
    </>
  )
}

