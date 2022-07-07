import React, { useRef } from 'react';

function Refexample(props) {

    const nameRef = useRef();
    const emailRef = useRef();

    const getdata = () => {
        console.log(nameRef.current.value, emailRef.current.value);

        nameRef.current.style.backgroundColor = "red";
        emailRef.current.focus();
    }
    return (
        <div>
            <input name='name' ref={nameRef} type={'text'} placeholder='Enter Your Name' />
            <input name='mail' ref={emailRef} type={'email'} placeholder='Enter Your Email' />

            <button onClick={() => getdata()}>Submit</button>
        </div>
    );
}

export default Refexample;