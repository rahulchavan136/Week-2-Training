import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const { styleProps } = this.props;
    return (
      <div style={styleProps}>
        <h2 style={{padding:"10px"}}>Child component.</h2>
      </div>
    );
  }
}

export default ChildComponent;
