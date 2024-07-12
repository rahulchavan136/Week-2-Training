import React from 'react';

const ChildComponent = () => {
    console.log("render child component");
    return (
        <div>
            <h3>Yes render child component ...!</h3>
        </div>
    );
};

export default ChildComponent;
