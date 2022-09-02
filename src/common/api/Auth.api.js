import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Fierbase";

export const Signupapi = (data) => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(user)
                        .then(() => {
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
                console.log("kkkkkkkk", errorCode);
                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    reject({payload : "I think You used This Mail id To signup before now you have to login"});
                } else {
                    reject({payload:errorMessage});
                }
            });
    })
}

export const Signinapi = (data) => {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user.emailVerified) {
                    resolve({payload: "Login successfully"})
                } else  {
                    reject({payload:"Email sending To Your email"});
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                    reject({payload : "Email/password is wrong"});
                } else {
                    reject({payload:errorMessage});
                }
            });
    })

}

export const forgotapi = (data) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then(() => {
                resolve({ payload: "Please check your email." })
                console.log("check your mali");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // reject({ payload: errorCode })
                    reject({ payload:" something went wrong "  });

            });
    })
}