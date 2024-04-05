export default function Options({ nameBtn, feedbackType, onUpdate, totalFeedback, onReset }) {
    
  return   (
    <>
      {nameBtn !== "Reset" ? (
        <button onClick={() => onUpdate(feedbackType)}>{nameBtn}</button>
      ) : (
        totalFeedback > 0 && <button onClick={onReset}>{nameBtn}</button>
      )}
    </>
  );
}

