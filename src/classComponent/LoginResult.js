import React from 'react';

class LoginResult extends React.Component {
  shouldComponentUpdate(nextProps) {
    // Only update if the isLoggedIn prop changes
    return nextProps.isLoggedIn !== this.props.isLoggedIn;
  }

  render() {
    const { isLoggedIn } = this.props;
    const backgroundColor = isLoggedIn ? 'green' : 'red';
    const message = isLoggedIn ? 'Login Successful!' : 'Invalid login credentials.';

    return (
      <div style={{ backgroundColor, padding: '10px', margin: '10px', borderRadius: '5px' }}>
        <p>{message}</p>
      </div>
    );
  }
}

export default LoginResult;
