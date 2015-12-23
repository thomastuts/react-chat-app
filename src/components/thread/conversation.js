import React from 'react';
import MessageBlock from './message-block';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.refs.conversation.scrollTop = this.refs.conversation.scrollHeight - this.refs.conversation.clientHeight;
  }

  render() {
    const { conversation } = this.props;

    const messageBlocks = conversation.map((entry, index) => (
      <MessageBlock key={index} sender={entry.sender} messages={entry.messages} />
    ));

    return (
      <main className="conversation" ref="conversation">
        {messageBlocks}
      </main>
    );
  }
}


Conversation.propTypes = {
  conversation: React.PropTypes.array.isRequired,
};

export default Conversation;
