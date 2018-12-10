import React from 'react';

export const FormField = ({field, changeHandler}) => {
  let {label, name, value, type, required} = field;

  return (
      <div className={`${name}-field`}>
        <label htmlFor={name}>{label}:</label>
        { type === "textarea"
            ? <textarea id={name} name={name} value={value} cols="32" rows="6"
                        onChange={changeHandler} required={required} />
            : <input id={name} name={name} value={value} type={type}
                     onChange={changeHandler} required={required} />
        }
      </div>
  );
};