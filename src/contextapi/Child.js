import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './UserContext';

const Child = ({ users }) => {
    return (
        <div className='text-center mt-5'>
            {users.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name} &nbsp;&nbsp; Age: {user.age}</p>
                </div>
            ))}
        </div>
    );
};

Child.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        })
    ).isRequired
};

const ChildComponentWithUserContext = () => {
    const users = useContext(UserContext);
    return <Child users={users} />;
};

export default ChildComponentWithUserContext;
