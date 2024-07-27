import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";



function App() {
  const [likes, setLikes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setLikes({...likes, [feedbackType]: likes[feedbackType] + 1});
   }

  const sum = likes.good + likes.neutral + likes.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}/>
      <Feedback good={likes.good} neutral={likes.neutral} bad={likes.bad} total={sum} positive={55} />
    </>
  );
}

export default App;
