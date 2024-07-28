import css from '../Options/Options.module.css'

const Options = ({updateFeedback, resetFeedback, sum}) => {
  return (
    <div className={css.options}>
      <button className={css.btn} type='button' onClick={() => updateFeedback("good")}>Good</button>
      <button className={css.btn} type='button' onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={css.btn} type='button' onClick={() => updateFeedback("bad")}>Bad</button>
      <button className={sum === 0 ? css.resetBtn : css.btn} type='button' onClick={() => resetFeedback()}>Reset</button>
    </div>
  )
}

export default Options