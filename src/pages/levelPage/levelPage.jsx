import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Level from '../../components/level/level'


function LevelPage() {

    const p = sessionStorage.getItem("points");
    const points = parseInt(p)

    const [resp, setResp] = useState("")
    const [respText, setRespText] = useState("")
    const [levelNumber, setLevelNumber] = useState("")

    function responseLevel() {
        if(points == 0){
            setResp("BARBIE")
            setRespText("Sou a barbie girl se você quer ser meu namorado")
            setLevelNumber("1")
        }
        if(points == 1){
            setResp("BARBIE")
            setRespText("Sou a barbie girl se você quer ser meu namorado")
            setLevelNumber("2")
        }
        if(points == 2){
            setResp("BARBIE")
            setRespText("Sou a barbie girl se você quer ser meu namorado")
            setLevelNumber("3")
        }
        if(points == 3){
            setResp("BARBIE")
            setRespText("Sou a barbie girl se você quer ser meu namorado")
            setLevelNumber("4")
        }
        if(points == 4){
            setResp("BARBIE")
            setRespText("Sou a barbie girl se você quer ser meu namorado")
            setLevelNumber("5")
        }
    }
    useEffect(() => responseLevel())

    return ( 
        <>
            <Level resp={resp} respText={respText} levelNumber={levelNumber} levelPoints={points} />
        </>
     );
}

export default LevelPage;