import React from 'react';
import classNames from 'classnames';

import Avatar from './avatar';
import Message from './message';

const MessageBlock = ({ sender, messages }) => {
  const messagesFromSender = messages.map((message, index) => {
    const timestamp = 'Sat 19:16';
    return <Message content={message.content} timestamp={timestamp} key={index} />;
  });

  const isFromSelf = sender.id === 'self';

  return (
    <div className={classNames('message-block', { 'message-block--self': isFromSelf, 'message-block--other': !isFromSelf })}>
      <Avatar sender={sender} />
      <div className="message-block__messages">{messagesFromSender}</div>
    </div>
  );
};

MessageBlock.propTypes = {
  sender: React.PropTypes.object.isRequired,
  messages: React.PropTypes.array.isRequired,
};

export default MessageBlock;
