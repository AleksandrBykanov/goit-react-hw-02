import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [likes, setLikes] = useState(() => {
    const items = window.localStorage.getItem("state");
    if (items !== null) {
      return JSON.parse(items)
    }
    return ({ good: 0, neutral: 0, bad: 0,})
  });

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(likes));
  }, [likes]);

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
      {sum > 0? <Feedback
        good={likes.good}
        neutral={likes.neutral}
        bad={likes.bad}
        total={sum}
        positive={positive}
      /> :
      <Notification />}
    </>
  );
}

export default App;
