import React, { Component } from 'react';
import ContactCard from './containers/contactCard/contactCard';
import MenuSlide from './containers/menuSlide/menuSlide';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.handleMenuClicked = this.handleMenuClicked.bind(this);
    this.state = {isOpen: false};
  }

  handleMenuClicked()
  {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="App">
        <MenuSlide isOpen={this.state.isOpen} />
        <ContactCard menuClicked={this.handleMenuClicked} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default App;
