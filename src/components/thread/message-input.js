import React from 'react';

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const messageContent = this.refs.message.value;

    if (messageContent) {
      this.props.onSendMessage(messageContent);
      this.refs.message.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="message-input">
        <input type="text" ref="message" placeholder="Send message" />
      </form>
    );
  }
}

MessageInput.propTypes = {
  onSendMessage: React.PropTypes.func.isRequired,
};
