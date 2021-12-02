import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onClickGood, onClickNeutral, onClickBad }) {
  return (
    <>
      <div>
        <button type="button" className={s.button} onClick={onClickGood}>
          Good
        </button>
        <button type="button" className={s.button} onClick={onClickNeutral}>
          Neutral
        </button>
        <button type="button" className={s.button} onClick={onClickBad}>
          Bad
        </button>
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func,
  onClickNeutral: PropTypes.func,
  onClickBad: PropTypes.func,
};

export default FeedbackOptions;
