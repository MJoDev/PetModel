import './LoginInput.css';

function LoginInput( {text, register, type}) {

    return (
        <form className="form">
            <div className="input-container">
                <input type={type} required {...register}/>
                <label className="lbl-input">
                    <span className="span-input">{text}</span>
                </label>
            </div>
        </form>
    );
}

export default LoginInput;