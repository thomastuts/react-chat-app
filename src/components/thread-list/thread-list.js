import React from 'react';

import ThreadPreview from './thread-preview';
import { getThreads } from '../../data/threads';

export default class ThreadList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      threads: getThreads(),
    };
  }

  render() {
    const threads = this.state.threads.map(thread => <ThreadPreview thread={thread} key={thread.id} />);

    return (
      <div className="thread-list">
        {threads}
      </div>
    );
  }
}

ThreadList.propTypes = {};
