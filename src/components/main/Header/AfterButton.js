import React from 'react';

const AfterButton = ({page}) => {
    return (
        <div>
            <button style={{display: page ? "block" : "none"}}>click</button>
        </div>
    );
};

export default AfterButton;