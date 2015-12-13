import React from 'react';
import ReactDOM from 'react-dom';

import { getThread } from './data/threads';

import Thread from './components/thread';

ReactDOM.render(
  <Thread thread={getThread(0)} />,
  document.getElementById('root')
);
