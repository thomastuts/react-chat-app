import React from 'react';

export default class Message extends React.Component {
  render() {
    return (
      <div className={`message ${this.props.sender}`}>
        {this.props.content}
      </div>
    );
  }
}

Message.propTypes = {
  sender: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};
