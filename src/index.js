import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createHashHistory';

import Thread from './components/thread/thread';
import ThreadList from './components/thread-list/thread-list';

const history = createBrowserHistory({
  queryKey: false
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}

App.propTypes = {};


ReactDOM.render(
  <Router history={history} >
    <Route path="/" component={App}>
      <IndexRoute component={ThreadList}/>
      <Route path="threads/:threadId" component={Thread} />
    </Route>
  </Router>,
  document.getElementById('root')
);
