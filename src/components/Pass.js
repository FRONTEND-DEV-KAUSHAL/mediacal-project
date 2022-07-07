import React from 'react';

function Pass(props) {
    return (
        <div>
            <h1>Pass Comp.</h1>
            <button onClick={() => props.data()}>Click Button</button>
        </div>
    );
}

export default Pass;