import css from '../Feedback/Feedback.module.css'


const Feedback = ({good, neutral, bad, total, positive, }) => {
  if (total === 0) {
    return
  }
  
  return (
    <div>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive} %</li>
      </ul>
    </div>
  );
};

export default Feedback;
