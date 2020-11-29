/*
* All APIs call to Dev.Hel.Fi that could be needed using axios
*/
import axios from 'axios'

let set_manufacturers = new Set()
async function  getJackets(){
    let jackets = []
    await axios.get("/api/products/jackets")
    .then(
        response =>{
            jackets = response.data
        }
    )
    return jackets
}
async function getShirts(){
    let shirts = []
    axios.get(`/api/products/shirts`)
    .then(
        response =>{
            shirts = response.data
        }
    )
    return shirts
}
async function  getAccessories(){
    let accessories = []
    axios.get(`/api/products/accessories`)
    .then(
        response =>{
            accessories = response.data
        }
    )
    return accessories
}
async function  getAvailability(manufacturer, id){
    let avail = []
    let str = ""
    await axios.get(`/api/availability/${manufacturer}`)
    .then(
        response =>{
            avail = response.data.response
            avail.forEach(item => {
                if(item.id === id.toUpperCase()){
                    let getPayload = item.DATAPAYLOAD.replace('<AVAILABILITY>','');
                    let getPayload2 = getPayload.replace('<INSTOCKVALUE>','');
                    let getPayload3 = getPayload2.replace('</AVAILABILITY>','');
                    let getPayload4 = getPayload3.replace('</INSTOCKVALUE>','');
                    str = getPayload4.trim()
                }
            })
        }
    )
    return str
}

async function getAvailabilityPerProduct (manufacturer, id){
    let avail = []
    let str = ""
    id = id.toUpperCase()
    await getAvailability(manufacturer)
    .then(
        response => {
            avail = response.data.response
            avail.forEach(item => {
                if(item.id === id){
                    let getPayload = item.DATAPAYLOAD.replace('<AVAILABILITY>','');
                    let getPayload2 = getPayload.replace('<INSTOCKVALUE>','');
                    let getPayload3 = getPayload2.replace('</AVAILABILITY>','');
                    let getPayload4 = getPayload3.replace('</INSTOCKVALUE>','');
                    str = getPayload4.trim()
                }
            })
        }
    )
    return str
}
async function getAllManufacturers(){
    let jackets =[]
    let shirts=[]
    let accessories=[]
    await getJackets()
        .then(
            response => {
                jackets = response.data;
                jackets.forEach(jacket => {
                    set_manufacturers.add(jacket.manufacturer)
                })
            })
        .catch(error => {
                console.error("There was an error in retrieving jackets!", error);
        });
    await getShirts()
        .then(
            response => {
                shirts = response.data;
                shirts.forEach(shirt => {
                    set_manufacturers.add(shirt.manufacturer)
                })
            })
        .catch(error => {
                console.error("There was an error in retrieving shirts!", error);
        });
    await getAccessories()
        .then(
            response => {
                accessories = response.data;
                accessories.forEach(accessory => {
                    set_manufacturers.add(accessory.manufacturer)
                })
            })
        .catch(error => {
                console.error("There was an error in retrieving shirts!", error);
        });
    return set_manufacturers
}
const apis = {
    getAllManufacturers,
    getAvailabilityPerProduct,
    getJackets,
    getShirts,
    getAccessories,
    getAvailability
}

export default apis