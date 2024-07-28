import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const [likes, setLikes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setLikes({ ...likes, [feedbackType]: likes[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setLikes({ good: 0, neutral: 0, bad: 0 });
  };

  const sum = likes.good + likes.neutral + likes.bad;
  const positive = Math.round((likes.good / sum) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        sum={sum}
      />
      <Feedback
        good={likes.good}
        neutral={likes.neutral}
        bad={likes.bad}
        total={sum}
        positive={positive}
      />
      <Notification sum={sum} />
    </>
  );
}

export default App;
