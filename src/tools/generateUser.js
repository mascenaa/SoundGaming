import Chance from "chance"
const chance = new Chance()

function GenerateUser () {
    const id = chance.android_id()
    if(id) {
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("points", 0);
    }
    console.log(id)
}

export { GenerateUser }