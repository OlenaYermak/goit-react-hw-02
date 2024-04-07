export default function Feedback({ count, totalFeedback, positiveFeedback }) {
    
    return (
       
         <>
      <p>Good: {count.good}</p>
      <p>Neutral: {count.neutral}</p>
      <p>Bad: {count.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
    );
}