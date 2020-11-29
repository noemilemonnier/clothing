/*
* All APIs call to Dev.Hel.Fi that could be needed using axios
*/
import axios from 'axios'

export let set_manufacturers = new Set()
export async function getJackets(){
    try{
        await axios
                .get("/api/products/jackets")
                .then((response) => {
                    let jackets = response.data
                    return jackets
                })
                .catch((error) => {
                    console.error("There was an error in retrieving jackets!", error);
                });
    }catch(error){
        console.error("There was an error in retrieving jackets!", error);
    }
}
export const getShirts = () => axios.get(`/api/products/shirts`)
export const getAccessories = () => axios.get(`/api/products/shirts`)
export const getAvailability = (manufacturer) => axios.get(`/api/availability/${manufacturer}`)
export function getAllManufacturers(){
    const jackets = getJackets()
    for (var jacket in jackets) {
        set_manufacturers.add(jacket.manufacturer)
    }
    const shirts = getShirts()
    for (var shirt in shirts) {
        set_manufacturers.add(shirt.manufacturer)
    }
    const accessories = getAccessories()
    for (var accessory in accessories) {
        set_manufacturers.add(accessory.manufacturer)
    }
    return set_manufacturers
}
const apis = {
    getAllManufacturers,
    getJackets,
    getShirts,
    getAccessories,
    getAvailability
}

export default apis