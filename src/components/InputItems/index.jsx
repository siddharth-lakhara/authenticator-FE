import React from 'react';
import './inputItems.css';

const InputItems = ({
  name, value, title, type, onChange,
}) => (
  <div className="input">
    <div className="input-title">{title}: </div>
    <input className="input-inputFields" name={name} value={value} type={type} onChange={onChange} />
  </div>
);


export default InputItems;
