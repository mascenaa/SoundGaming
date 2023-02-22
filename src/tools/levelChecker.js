import { useNavigate } from "react-router-dom";

function clean(response) {const res = response.toUpperCase();return res.replace(/\s/g, "")}

function checkAttempts(attempts) {
    const nav = useNavigate()
    if(attempts === 1) {setAttemps(2)}
    if(attempts === 2) {setAttemps(3)}
    if(attempts === 3) { nav('/fail')}

}

function handleSubmit(e, cleaned, resp, actualPoints) {
    const nav = useNavigate()
    e.preventDefault();
    setInput(e.target.value);
    if(cleaned === resp) {
        sessionStorage.setItem("points", actualPoints + 1)
        nav("/loading")
    }
}



export { clean, checkAttempts, handleSubmit }