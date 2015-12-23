import React from 'react';
import Conversation from './conversation';
import ThreadHeader from './thread-header';
import MessageInput from './message-input';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSendMessage(messageContent) {
    console.log('Sending message:', messageContent);
  }

  render() {
    const { thread } = this.props;

    return (
      <div className="thread">
        <ThreadHeader participants={thread.participants} />
        <Conversation conversation={thread.conversation} />
        <MessageInput onSendMessage={this.handleSendMessage.bind(this)} />
      </div>
    );
  }
}

Thread.propTypes = {
  thread: React.PropTypes.object.isRequired,
};
