import React from 'react';
import MessageBlock from './message-block';

const Conversation = ({ conversation }) => {
  const messageBlocks = conversation.map((entry, index) => (
    <MessageBlock key={index} sender={entry.sender} messages={entry.messages} />
  ));

  return (
    <main className="conversation">
      {messageBlocks}
    </main>
  );
};

Conversation.propTypes = {
  conversation: React.PropTypes.array.isRequired,
};

export default Conversation;
