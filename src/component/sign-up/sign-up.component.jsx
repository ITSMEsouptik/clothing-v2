import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
    
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('Password is incorrect');
        }
        else{
          try {
            const { user } = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
          } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
              alert('Email Already Exist');
            }
            console.log('User creation error' + error);
          }
        } 
    }

    return (
        <div>
            <h2>Sign Up with your email and password</h2>
            <form onSubmit={handleSubmit}>
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