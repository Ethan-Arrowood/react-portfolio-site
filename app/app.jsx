var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Home = require("Home");

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render( //most common react-dom method
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <IndexRoute component={Home}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
