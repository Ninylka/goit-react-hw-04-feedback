import { ButtonFeedback } from '../Section/Section.styled'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        {/* <h2>Please leave feedback</h2> */}
        {options.map((option) => (
          <ButtonFeedback key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </ButtonFeedback>
        ))}
      </div>
    );
  };
  
