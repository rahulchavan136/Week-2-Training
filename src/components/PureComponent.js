import React from 'react';
import ReactDOM from 'react-dom';

class MyPureComponent extends React.PureComponent {
  render() {
    console.log('MyPureComponent - Rendering');
    return (
      <div>
        <h1>Data: {this.props.data}</h1>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    data: 10
  };

  updateData = () => {
    // Perform some operations that result in the same value
    const newData = this.state.data * this.state.data / this.state.data;
    this.setState({ data: newData });
  };

  render() {
    console.log('App - Rendering');
    return (
      <div>
        <MyPureComponent data={this.state.data} />
        <button onClick={this.updateData}>Update Data</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
