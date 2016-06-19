var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('./styles/index');
var Nav = require('./components/Nav');

var BoilerPlateHTML = React.createClass({
  render:function(){
    return(
      <div style={styles.body}>
        <Nav/>
        <div className="container">
          <div style={styles.starterTemplate}>
            <h1>React-Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <BoilerPlateHTML/>,
  document.getElementById('app')
);
