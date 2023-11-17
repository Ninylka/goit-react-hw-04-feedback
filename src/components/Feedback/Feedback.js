import { useState } from "react"
import { ContainerFeedback } from "./Feedback.styled";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/Feedbackoptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";


export const CouterFeedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


 
  const handleLeaveFeedback = (type) => {
    if (type === 'good') {
      setGood((prevGood) => prevGood + 1);
    } else if (type === 'neutral') {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (type === 'bad') {
      setBad((prevBad) => prevBad + 1);
    }
  };



const countTotalFeedback = () => good + neutral + bad;


  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good * 100) / total) + '%' : '0%';
  };
 
 
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys({good, neutral, bad });

  return(
          
    <ContainerFeedback>
<Section title="Please leave feedback">
  <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
</Section>
<Section title="Statistics">
  {total > 0 ? (
  <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
  ) : (<Notification message="There is no feedback" />)
  }
</Section>
</ContainerFeedback>
)


}