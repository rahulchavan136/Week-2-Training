// import React, { Component, PureComponent } from 'react';

// class MyPureComponent extends PureComponent {

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('MyPureComponent - Checking if should update');
//         console.log('Current props:', this.props);
//         console.log('Next props:', nextProps);
//         // Perform shallow comparison on props
//         return nextProps.name !== this.props.name;
//     }

//     render() {
//         console.log('MyPureComponent - Rendering');
//         return (
//             <div>
//                 <h1>Name : {this.props.name}</h1>
//             </div>
//         );
//     }
// }

// class MyMainComponent extends Component {
//     state = {
//         name: 'Rahul'
//     };

//     updateName = () => {
//         console.log("this is not re-render is name remains");
//         this.setState({ name: 'Raju' });
//     };

//     updateNameWithNewValue = () => {
//         console.log("This will trigger a re-render with new name");
//         this.setState({ name: 'Rani' });
//     };

//     render() {
//         console.log('MyMainComponent - Rendering');
//         return (
//             <div className='text-center'>
//                 <MyPureComponent name={this.state.name} />
//                 <button onClick={this.updateName}>Update Name to Raju</button> &nbsp;
//                 <button onClick={this.updateNameWithNewValue}>Update Name to Rani</button>
//             </div>
//         );
//     }
// }

// export default MyMainComponent;


import React from 'react';
import { Button } from 'react-bootstrap';

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

class MyMainComponent extends React.Component {
  state = {
    data: 10
  };

  updateData = () => {
     const newData = this.state.data * this.state.data / this.state.data;
    this.setState({ data: newData });
  };

  render() {
    console.log('MyMainComponent - Rendering');
    return (
      <div className='text-center mt-5'>
        <MyPureComponent data={this.state.data} />
        <Button variant='success' onClick={this.updateData}>Update Data</Button>
      </div>
    );
  }
}

export default MyMainComponent;
