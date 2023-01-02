import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

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
                <FormInput
                  label='Display Name'
                  type='text'
                  required
                  onChange={onChangeHandler}
                  name='displayName'
                  value={displayName}
                />
                <FormInput
                  label='Email'
                  type='email'
                  required
                  onChange={onChangeHandler}
                  name='email'
                  value={email}
                />
                <FormInput
                  label='Password'
                  type='password'
                  required
                  onChange={onChangeHandler}
                  name='password'
                  value={password}
                />
                <FormInput
                  label='Confirm Password'
                  type='password'
                  required
                  onChange={onChangeHandler}
                  name='confirmPassword'
                  value={password}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;