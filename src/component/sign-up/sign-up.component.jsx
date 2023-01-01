import { useState } from "react";

const defaultFormFields = {
    displayName:'',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    
    console.log(formFields);

    const onChangeHandler = (event) => {
        const { name,value } = event.target;
        setFormFields({...formFields, [name]:value});
    }

    return (
        <div>
            <h2>Sign Up with your email and password</h2>
            <form>
                <label>Display Name</label>
                <input 
                  type="text"
                  required
                  onChange={onChangeHandler}
                  name="displayName"
                  value={displayName}
                />
                <label>Email</label>
                <input
                  type="email"
                  required
                  onChange={onChangeHandler}
                  name="email"
                  value={email}
                />
                <label>Password</label>
                <input
                  type="password"
                  required
                  onChange={onChangeHandler}
                  name="password"
                  value={password}
                />
                <label>Confirm Password</label>
                <input
                  type="password"
                  required
                  onChange={onChangeHandler}
                  name="confirmPassword"
                  value={confirmPassword}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;