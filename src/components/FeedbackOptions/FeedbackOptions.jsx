import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <FeedbackButton
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;