import css from '../Options/Options.module.css'

const handleClick = () => {

}

const Options = () => {
  return (
    <div className={css.options}>
      <button className={css.btn} type='button' onClick={()=>{handleClick()}}>Good</button>
      <button className={css.btn} type='button' onClick={()=>{handleClick()}}>Neutral</button>
      <button className={css.btn} type='button' onClick={()=>{handleClick()}}>Bad</button>
      <button className={css.btn} type='button' onClick={()=>{handleClick()}}>Reset</button>
    </div>
  )
}

export default Options