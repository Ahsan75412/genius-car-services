import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h2>You are about To Book {service.name}</h2>

           <div className='text-center'>
           <Link to={`/checkout/${serviceId}`}>
                <button className="btn btn-primary">Check Out</button>
            </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;