export default function Options({ nameBtn, feedbackType, onUpdate }) {
    return <button onClick={() => onUpdate(feedbackType)}>{nameBtn}</button>;
}

