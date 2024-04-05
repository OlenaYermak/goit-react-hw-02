export default function Options({ nameBtn, feedbackType, onUpdate, totalFeedback, onReset }) {
    
    return ( <>
      <button onClick={() => onUpdate(feedbackType)}>{nameBtn}</button>
      {totalFeedback > 0 && <button onClick={onReset}>{nameBtn}</button>}
    </>) 
       
}

