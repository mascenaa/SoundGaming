import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clean } from "../../tools/levelChecker";
import './level.css'

import AttemptsIcon from '../../assets/attempts.svg'
import AttemptsError from '../../assets/aError.svg'

function Level(props) {

    const nav = useNavigate()
    const [attempts, setAttempts] = useState(0);
    const [input, setInput] = useState("");
    const p = sessionStorage.getItem("points");
    const points = parseInt(p)
    const cleaned = clean(input);
    const resp = props.resp;

    const AttemptsChecker = () => {
        if(attempts === 0) {
            return <div className="att"><img src={AttemptsIcon} /><img src={AttemptsIcon} /><img src={AttemptsIcon} /></div>  
        } 
        if(attempts === 1) {
            return <div className="att"><img src={AttemptsError} /><img src={AttemptsIcon} /><img src={AttemptsIcon} /></div>
        }
        if(attempts === 2) {
            return <div className="att"><img src={AttemptsError} /><img src={AttemptsError} /><img src={AttemptsIcon} /></div>
        }
        if(attempts === 3) {
            return <div className="att"><img src={AttemptsError} /><img src={AttemptsError} /><img src={AttemptsError} /></div>
        }
    }
    

    const checkWin = () => {
        if (attempts === 1) {
            setAttempts(2);
        }
        if (attempts === 2) {
            setAttempts(3);
        }
        if (attempts === 3) { nav("/fail"); }
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        setAttempts(1)
        if (cleaned === resp) {
            sessionStorage.setItem("points", points + 1)
            nav("/loading")
        } else {
            checkWin()
            setInput(" ")
        }
    }



    return (
        <section className="level">
            <div className="levelHeader">
                <h1>Level {props.levelNumber}</h1>
                <h2>Points: {props.levelPoints}</h2>
            </div>

            <div className="levelTextArea">
                <h1>{props.respText}</h1>
            </div>

            <div className="levelInputArea">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input placeholder="Insert your answer" value={input} className="input" onChange={(e) => {
                        e.preventDefault()
                        setInput(e.target.value)
                    }}>
                    </input>
                </form>
            </div>

            <div className="levelAttempsArea">
                   {AttemptsChecker()}
            </div>

        </section>
    );
}

export default Level;