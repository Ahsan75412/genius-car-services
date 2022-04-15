import React from 'react';

import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-3.jpg';
import expert4 from '../../../Images/experts/expert-4.jpg';
import expert5 from '../../../Images/experts/expert-5.jpg';
import expert6 from '../../../Images/experts/expert-6.png';
import Expert from '../Expert/Expert';



const experts = [
    {id:1 , name: 'John Doe', img: expert1},
    {id:2 , name: 'Ahsan', img: expert2},
    {id:3 , name: 'Sabbir', img: expert3},
    {id:4 , name: 'Turag', img: expert4},
    {id:5 , name: 'Moni', img: expert5},
    {id:6 , name: 'Ceucamber', img: expert6}
]


const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>

            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert = {expert}
                    
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;