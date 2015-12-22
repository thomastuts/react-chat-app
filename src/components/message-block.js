import React from 'react';
import classNames from 'classnames';

const MessageBlock = ({ sender, messages }) => {
  const messagesFromSender = messages.map((message, index) => (
    <div className="message" key={index}>{message.content}</div>
  ));

  const isFromSelf = sender.id === 'self';

  return (
    <div className={classNames('message-block', { 'self': isFromSelf, 'other': !isFromSelf })}>
      <div className="avatar">T</div>
      {messagesFromSender}
    </div>
  );
};

MessageBlock.propTypes = {
  sender: React.PropTypes.object.isRequired,
  messages: React.PropTypes.array.isRequired,
};

export default MessageBlock;
