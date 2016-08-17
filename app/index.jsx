import './styles.css';
import React from 'react';
import { render } from 'react-dom'
import Hello from './hello.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        <Hello/>
      </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
