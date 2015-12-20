import React from 'react';
import MessageList from './message-list';
import ThreadHeader from './thread-header';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thread">
        <ThreadHeader participants={this.props.thread.participants} />
        <MessageList messages={this.props.thread.messages} />
      </div>
    );
  }
}

Thread.propTypes = {
  thread: React.PropTypes.object.isRequired
};
