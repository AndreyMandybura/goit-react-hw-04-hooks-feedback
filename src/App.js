import { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveGoodFeedback = () => {
    setGood(prevState => prevState + 1);
  };

  const onLeaveNeutralFeedback = () => {
    setNeutral(prevState => prevState + 1);
  };

  const onLeavesetBadFeedback = () => {
    setBad(prevState => prevState + 1);
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onClickGood={onLeaveGoodFeedback}
          onClickNeutral={onLeaveNeutralFeedback}
          onClickBad={onLeavesetBadFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}

export default App;
