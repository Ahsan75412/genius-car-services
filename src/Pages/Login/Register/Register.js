import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = (event) => {
        navigate('/login');

    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
        console.log(user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.agree.checked;
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }



       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name});
       console.log('Updated profile');
       navigate('/home');

    }
    return (
        <div className='register-form'>
            <h2 className='text-center mt-5 text-primary'>Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id='' placeholder='Your Name' />

                <input type="email" name='email' id='' placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Your Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary ' : 'ps-2 text-danger'} htmlFor="terms">I agree to the terms and conditions</label> */}

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">I agree to the terms and conditions</label>

                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-3'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

            {/* import social login design here */}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;