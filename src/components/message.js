import React from 'react';

const Message = ({sender, content}) => (
  <div className={`message ${sender}`}>
    {content}
  </div>
);

Message.propTypes = {
  sender: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};

export default Message;
