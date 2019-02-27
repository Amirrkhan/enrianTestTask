import React from 'react';

const input = (props) => {
    return (
        <div className={`input ${props.className}`}>
            <label className="input__label">
                {props.labelText}
            </label>
            <input className="input__field"/>
        </div>
    );
};

export default input;