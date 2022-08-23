import {createUserWithEmailAndPassword,  sendEmailVerification } from "firebase/auth";
import { auth } from "../../Fierbase";

export const Signupapi = (data) => {
    console.log("signupApi",data);  

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Auth kugfkus");
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    })
}