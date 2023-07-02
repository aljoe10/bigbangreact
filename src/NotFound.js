import React from 'react';

const NotFound = (props) => {
    return (
        <div id="error" style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
            <h1 style={{ color: 'red', fontSize: '40px', textShadow: '2px 2px 4px #000' }}>Page Not Found</h1>
        </div>
    );
}

export { NotFound };
