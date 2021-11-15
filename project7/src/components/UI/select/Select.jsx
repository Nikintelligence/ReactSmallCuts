import React from 'react'

const Select = ({options, defaultV, value, onChange}) => {
    return (
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled value='value1'>{defaultV}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;