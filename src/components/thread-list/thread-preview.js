import React from 'react';
import { Link } from 'react-router';

import Avatar from '../common/avatar';

const ThreadPreview = ({ thread }) => {
  const lastMessageBlock = thread.conversation[thread.conversation.length - 1];
  const lastMessage = lastMessageBlock.messages[lastMessageBlock.messages.length - 1];
  const isLastMessageBySelf = lastMessageBlock.sender.id === 'self';
  const threadUrl = `/threads/${thread.id}`;

  return (
    <Link to={threadUrl} params={{ threadId: thread.id }} className="thread-preview">
      <Avatar contact={thread.participants[0]} />
      <div className="thread-preview__last-message">
        <p><strong>{isLastMessageBySelf ? 'You' : lastMessageBlock.sender.name}: </strong>{lastMessage.content}</p>
        <time>Sat 19:16</time>
      </div>
    </Link>
  );
};

ThreadPreview.propTypes = {
  thread: React.PropTypes.object.isRequired
};

export default ThreadPreview;
