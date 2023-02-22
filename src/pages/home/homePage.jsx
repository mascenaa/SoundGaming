import React from 'react';
import { useNavigate  } from 'react-router-dom';
import './home.css'
import Header from '../../components/header/header';
import 'animate.css'

export default function Home() {
 
    const nav = useNavigate()
    
    return (
        <section className='home'>
            <Header />
            <div className='homeIntro'>

                <h1 className="animate__animated animate__pulse homeTitle">  aSound. </h1>
                <h3 className='animate__animated animate__pulse homeSubtitle'>the game gives you a song, and you discover the name of the music.</h3>
            
                <button onClick={() => nav("/config")} className='animate__animated animate__pulse homeButton'>start game</button>
            </div>
        </section>
    )
}