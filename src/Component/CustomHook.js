import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase.init";
const CustomHook = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [User, setuser] = useState({})

    const HandleSignout = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful")
            }).catch((error) => {
                // An error happened.
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (User) => {
            setuser(User)
            
        });
    }, [])
    const provider = new GoogleAuthProvider();
const handleGooglesignin =()=>{
    
    signInWithPopup(auth, provider)
    .then(result=>{
        console.log(result.user)
         setuser(result.user)
    })
    .catch(error=>{
        console.log(error)
    })
}
 
    return {
        setemail,
        setpassword,
        createUserWithEmailAndPassword,
        User,
        HandleSignout,
        handleGooglesignin
    }

}
export default CustomHook;