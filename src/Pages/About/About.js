import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
// import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            {/* <Helmet>
                <title>About - Genius Car Service</title>
            </Helmet> */}

            <PageTitle title="About"></PageTitle>
            <h2>This is about us !</h2>
        </div>
    );
};

export default About;