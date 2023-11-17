import {  Section } from '../Section/Section'
import { FeedbackOptions } from '../Feedbackoptions/FeedbackOptions'
import { Statistics } from '../Statistics/Statistics'
import { Notification } from '../Notification/Notification'
import { ContainerFeedback } from './Feedback.styled'


const { Component } = require("react")

 export class CouterFeedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    handleLeaveFeedback = (type) => {
        this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
      };
   
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
    
      countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        return total > 0 ? Math.round((good * 100) / total) + '%' : '0%';
      };
    

    render() {
         
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);
    
        return(
          
            <ContainerFeedback>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
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
}





