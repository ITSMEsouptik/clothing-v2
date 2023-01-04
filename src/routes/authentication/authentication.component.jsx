import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import './authentication.styles.scss'

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        createUserDocumentFromAuth(user);
    }
    return (
        <div className="authentication-container">
            <SignIn googleSignIn={logGoogleUser}/>
            <SignUp/>
        </div>
    )
}

export default Authentication;