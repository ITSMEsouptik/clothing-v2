import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";
import './authentication.styles.scss'

const Authentication = () => {
    
    return (
        <div className="authentication-container">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication;