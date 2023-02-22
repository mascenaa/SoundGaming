import Chance from "chance"
const chance = new Chance()

function GenerateUser () {
    const id = chance.android_id()
    const points = 0
    if(id) {
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("points", points);
    }
    console.log(id)
}

export { GenerateUser }