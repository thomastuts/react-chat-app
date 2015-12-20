import React from 'react';
import Message from './message';

const MessageList = ({ messages }) => {
  const formattedMessages = messages.map((message, index) => <Message key={index} {...message} />);

  return (
    <main className="message-list">
      {formattedMessages}
    </main>
  );
};

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
};

export default MessageList;
