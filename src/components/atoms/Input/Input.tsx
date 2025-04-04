import React from 'react';
import './Input.css';

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, label }) => {
    const inputId = React.useId();
    
    return (
        <div>
            {label && (
                <label 
                    htmlFor={inputId}
                    className="input-label"
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input-field"
                aria-label={label || placeholder || "Calculator input"}
                role="textbox"
            />
        </div>
    );
};

export default Input;