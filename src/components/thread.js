import React from 'react';
import MessageList from './message-list';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thread">
        <h1>Thread</h1>
        <MessageList messages={this.props.thread.messages} />
      </div>
    );
  }
}

Thread.propTypes = {
  thread: React.PropTypes.object.isRequired
};
