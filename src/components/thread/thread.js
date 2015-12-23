import React from 'react';
import Conversation from './conversation';
import ThreadHeader from './thread-header';
import MessageInput from './message-input';

import { getThread, sendMessageToThread, subscribe } from '../../data/threads';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thread: getThread(props.params.threadId),
    };
  }

  componentDidMount() {
    subscribe(() => {
      this.setState({
        thread: getThread(this.props.threadId),
      });
    });
  }

  handleSendMessage(content) {
    sendMessageToThread({
      threadId: this.props.threadId,
      content,
    });
  }

  render() {
    const { thread } = this.state;

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
  //threadId: React.PropTypes.number.isRequired,
};
