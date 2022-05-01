import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-5 mb-3 text-primary'>Please add a service</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='btn btn-outline-primary w-50 mx-auto mt-5'   value = "Add Service" type="submit"/>

            </form>
        </div>
    );
};

export default AddService;