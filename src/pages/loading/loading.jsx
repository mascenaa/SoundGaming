import { useEffect } from 'react'
import Logo from '../../assets/logo.svg'
import Tips from '../../assets/tips.svg'
import LoadingBar from '../../components/loadingBar/loadingBar'

import './loading.css'
import { useNavigate } from 'react-router-dom'


function Loading() {

        
    const history = useNavigate()
    const p = sessionStorage.getItem("points")
    const points = parseInt(p)


        function levelInfos() {
            if(points === 0) {
                return <h1>First Level</h1>
            }
            else if(points === 1) {
                return <h1>Second Level</h1>
            }
            else if(points === 2) {
                return <h1>Third Level</h1>
            }
            else if(points === 3) {
                return <h1>Four Level</h1>
            }
            else if(points === 4) {
                return <h1>Five Level</h1>
            }
        }


    function checkerLevel() {
        useEffect(() => {
            if (points == 0) { setTimeout(() => { history('/level') }, 5000) }
            if (points == 1) { setTimeout(() => { history('/level') }, 5000) }
            if (points == 2) { setTimeout(() => { history('/level') }, 5000) }
            if (points == 3) { setTimeout(() => { history('/level') }, 5000) }
            if (points == 4) { setTimeout(() => { history('/level') }, 5000) }
        }, [])
    }


    const ops = [
        "Ouça com atenção cada batida!",
        "Cantar te ajuda a lembrar...",
        "Talvez pesquisar não seja a melhor opção...",
        "Lembre-se dos shows no banho 👩‍🎤"
    ];
    const randomFrase = ops[Math.floor(Math.random()*ops.length)];

    levelInfos()
    checkerLevel()
    return (  
        <section className='loading'>
            <div className='loadingHeader'>
                <img src={Logo} alt="." />
            </div>
            <div className='loadingBody'> 
                {levelInfos()}
                <LoadingBar />

                <h3><img src={Tips} /> Tips!</h3>
                <p>{randomFrase}</p>
            </div>
        </section>
    );
}

export default Loading;