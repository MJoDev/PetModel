import './LoginInput.css';
import { useState } from "react";

function LoginInput( { text, register, type, validate }) {
    const [isValid, setIsValid] = useState(true);

    const handleValidation = (value) => {
        setIsValid(validate ? validate(value) : true); // Valida usando la función proporcionada
    };

    return (
        <form className="form">
            <div className={`input-container ${!isValid ? 'invalid' : ''}`}>
                <input 
                    type={type} 
                    required 
                    {...register} 
                    onChange={(e) => handleValidation(e.target.value)} 
                    onBlur={(e) => handleValidation(e.target.value)} 
                    className={!isValid ? 'invalid-input' : ''} 
                />
                <label className="lbl-input">
                    <span className={`span-input ${!isValid ? 'error' : ''}`}>{text}</span>
                </label>
            </div>
        </form>
    );
}

export default LoginInput;