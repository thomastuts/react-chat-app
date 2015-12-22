import React from 'react';
import Conversation from './conversation';
import ThreadHeader from './thread-header';

export default class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { thread } = this.props;

    return (
      <div className="thread">
        <ThreadHeader participants={thread.participants} />
        <Conversation conversation={thread.conversation} />
      </div>
    );
  }
}

Thread.propTypes = {
  thread: React.PropTypes.object.isRequired,
};
