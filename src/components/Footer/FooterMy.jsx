import { Footer } from 'antd/lib/layout/layout';
import React from 'react';

const FooterMy = ({isLogged}) => {
    return (
        <Footer hidden={!isLogged} className='footer'>
            <a href="https://github.com/Agienko" target='_blank' rel='noreferrer'> Git Agienko </a>
           Todo-App-LS by Agienko. 
           <a href="https://github.com/AgienkoWebDev" target='_blank' rel='noreferrer'> Git AgienkoWebDev</a>
        </Footer>
    );
};

export default FooterMy;