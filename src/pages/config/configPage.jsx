import React from 'react';
import { useNavigate  } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import './config.css'
import { GenerateUser } from '../../tools/generateUser';

function Config() {
    const nav = useNavigate()

    return (
    <section>
        <div className='configHeader'>
            <img src={Logo} alt="." />
        </div>

        <div className='configAreaTop'>
           <h1>Let's config your game?</h1>
           <p>customize your experiencie</p> 
        </div>

        <div className='configAreaBody'>
            <h1>Coming Soon</h1>
        </div>

        <div className='configAreaBottom'> 
            <button onClick={() => {
                GenerateUser()
                nav("/loading")
                
                }}>Start</button>
        </div>

    </section>);
}

export default Config;