import PropTypes from 'prop-types';
import { MessageNotification } from './Notification.styled';

const Notification = ({ message }) => {
  return <MessageNotification>{message}</MessageNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;