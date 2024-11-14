import './LoginInput.css';

function LoginInput( {text, register, type}) {

    return (
        <form class="form">
            <div class="input-container">
                <input type={type} required {...register}/>
                <label class="lbl-input">
                    <span class="span-input">{text}</span>
                </label>
            </div>
        </form>
    );
}

export default LoginInput;