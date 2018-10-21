import React, { Component } from 'react';

import './App.css';

import FormLogin from './form';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '',
      text: '',
      t: '',
      c: ''

    };
  }

  handleClick() {
    const { t } = this.state;
    const { c } = this.state;

    this.setState({ color: c, text: t })

  }

  changeColor(c) {
    this.setState({
      c: c.target.value
    })
  }

  changeText(t) {
    this.setState({
      t: t.target.value
    })
  }

  render() {
    // console.log(this.state);
    const stylesObj = {
      background: this.state.color
    };
    const stylesFont = {
      color: this.state.color
    };
    return (

      <div id="hello-world" style={stylesObj} className="container">
        <div className="box">
          <h1 style={stylesFont}> {this.state.text}  </h1>
          <h2>Type The Color<small>(ex:red,green,blue etc)</small></h2>

          <input onChange={this.changeColor.bind(this)} />

          <h2>Type Your Name</h2>

          <input onChange={this.changeText.bind(this)} />
          <br />
          <button onClick={this.handleClick.bind(this)}>Submit</button>


        </div>
        <FormLogin style={stylesFont} username="hello hafiz" />
      </div>

    );
  }
}

export default App;