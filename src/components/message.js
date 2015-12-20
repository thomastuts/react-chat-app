import React from 'react';

const Message = ({ sender, content }) => (
  <div className={`message ${sender}`}>
    <span className="message-content">{content}</span>
  </div>
);

Message.propTypes = {
  sender: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};

export default Message;
