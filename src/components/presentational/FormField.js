import React from 'react';

export const FormField = ({field, changeHandler}) => {
  let {label, name, value, type, error} = field;

  return (
      <div className={`${name}-field`}>
        <label htmlFor={name}>{label}:</label>
        { type === "textarea"
            ? <textarea id={name} name={name} value={value} cols="32" rows="6"
                        onChange={changeHandler} />
            : <input id={name} name={name} value={value} type='text'
                     onChange={changeHandler} />
        }
        { error && <p className="error-message">{error}</p> }
      </div>
  );
};