import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'click'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    
     console.log('Previous Text (Snapshot):', prevState.text);
    return prevState.text;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
     document.getElementById("prevText").innerHTML = prevState.text;
     document.getElementById("nextText").innerHTML = this.state.text;

     console.log('Next Text (Updated):', this.state.text);
  }

  handleClick = () => {
    this.setState({ text: 'Clicked' });
  };

  render() {
    return (
      <div className='text-center'><br />
        <div id="prevText"></div>
        <div id="nextText"></div>
        <Button variant='danger' onClick={this.handleClick}>
          {this.state.text}
        </Button>
      </div>
    );
  }
}

export default ButtonComponent;
