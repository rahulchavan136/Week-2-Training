import React from 'react';
import Radium from 'radium';
import { Container } from 'react-bootstrap';

const styles = {
  box: {
    width: '400px',
    height: '200px',
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: 'lightcoral'
    },
    '@media (max-width: 600px)': {
      width: '100px',
      height: '100px',
      fontSize: '14px'
    }
  }
};

const HoverBox = () => {
  return (
    <Container className='text-center mt-5'>
    <div style={styles.box}>
      <h1>Hover over me!</h1>
    </div>
    </Container>
  );
};

export default Radium(HoverBox);


// import React from 'react';
// import Radium from 'radium';
 
// const MyComponent = () => {
//     const styles = {
//         container: {
//             padding: '10px',
//             backgroundColor: 'red',
//             ':hover': {
//                 backgroundColor: 'blue'
//             },
//             '@media (max-width: 768px)': {
//                 backgroundColor: 'lightgreen',
//             }
//         }
//     };
 
//     return (
//         <div style={styles.container}>
//             <h1>Hello, Radium!</h1>
//         </div>
//     );
// }
 
// export default Radium(MyComponent);