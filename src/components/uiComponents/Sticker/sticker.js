import React from 'react';

const Sticker = (props) => {
    return (
        <div className={`sticker ${props.className}`} >
            {props.children}
        </div>
    );
};

export default Sticker;