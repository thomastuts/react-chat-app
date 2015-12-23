import React from 'react';

const Message = ({ timestamp, content }) => (
  <div className="message-block__message">
    <div className="message-block__message__content">{content}</div>
    <time>{timestamp}</time>
  </div>
);

Message.propTypes = {
  timestamp: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};

export default Message;
