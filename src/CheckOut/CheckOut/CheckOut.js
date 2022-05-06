import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    const [user] = useAuthState(auth);
    // console.log(user);
    // const [user , setUser] = useState({
    //     name: 'Ahsan',
    //     email: 'ahsan@gmail.com',
    //     address: 'Dupchanchia Road, Dhaka',
    //     phone: '0177777777777'

    // });

    // const handleAddressChange = (event) => {
    //     const {address , ...rest }= user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress , ...rest};
    //     console.log(newUser , rest);
    //     setUser(newUser);

    // }

    const handlePlaceOrder = event => {
        event.preventDefault();

        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        // https://afternoon-stream-12422.herokuapp.com/order
        axios.post('https://afternoon-stream-12422.herokuapp.com/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Order Placed Successfully');
                    event.target.reset();
                }
            })
    }

    return (

        <div className='w-50 mx-auto mt-5'>
            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='Phone' required />
                <br />

                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;