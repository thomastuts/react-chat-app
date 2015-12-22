import React from 'react';
import classNames from 'classnames';

import Avatar from './avatar';

const MessageBlock = ({ sender, messages }) => {
  const messagesFromSender = messages.map((message, index) => {
    const timestamp = <time>Sat 19:16</time>;

    return (
      <div className="message-block__message" key={index}>
        <div className="message-block__message__content">{message.content}</div>
        {timestamp}
      </div>
    );
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
