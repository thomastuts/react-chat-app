import React from 'react';
import Message from './message';

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages.map((message, index) => <Message key={index} {...message} />);
    return (
      <div className="message-list">
        {messages}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
};
