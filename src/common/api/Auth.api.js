import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Fierbase";

export const Signupapi = (data) => {
    console.log("signupApi", data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(( ) => {
                            resolve({payload:"Email sending To Your email"});
                        })
                        .catch((e) => {
                            reject({payload:e})
                        })
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    reject({payload : "I think You used This Mail id To signup before now you have to login"});
                } else {
                    reject({payload:errorMessage});
                }
            });
    })
}